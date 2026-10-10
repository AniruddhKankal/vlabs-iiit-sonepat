"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { usePrefersReducedMotion } from "@/platform/motion";

import { MathText } from "./Math";

function isMathToken(token: string): boolean {
  return (
    (token.startsWith("$$") && token.endsWith("$$") && token.length > 4) ||
    (token.startsWith("$") && token.endsWith("$") && token.length > 2)
  );
}

/** Split lab copy into reveal units — words for prose, whole blocks for math/markdown. */
export function tokenizeForStream(text: string): string[] {
  const tokens: string[] = [];
  const parts = text.split(/((?:\$\$[\s\S]*?\$\$|\$(?:[^$\n])+?\$))/g);

  for (const seg of parts) {
    if (!seg) continue;

    if (isMathToken(seg)) {
      tokens.push(seg);
      continue;
    }

    seg.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\n)/g).forEach((chunk) => {
      if (!chunk) return;
      if (chunk === "\n" || chunk.startsWith("**") || chunk.startsWith("*")) {
        tokens.push(chunk);
        return;
      }
      chunk.split(/(\s+)/).forEach((word) => {
        if (word) tokens.push(word);
      });
    });
  }

  return tokens;
}

type StreamingMathTextProps = {
  text: string;
  /** Changes restart the reveal (e.g. section id). */
  streamKey: string;
  active?: boolean;
  onComplete?: () => void;
};

export function StreamingMathText({
  text,
  streamKey,
  active = true,
  onComplete,
}: StreamingMathTextProps) {
  const reducedMotion = usePrefersReducedMotion();
  const tokens = useMemo(() => tokenizeForStream(text), [text]);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const [revealed, setRevealed] = useState(0);
  const [done, setDone] = useState(false);

  const finish = useCallback(() => {
    setRevealed(tokens.length);
    setDone(true);
    onCompleteRef.current?.();
  }, [tokens.length]);

  useEffect(() => {
    if (reducedMotion) {
      setTimeout(() => {
        setRevealed(tokens.length);
        setDone(true);
        if (active) onCompleteRef.current?.();
      }, 0);
      return;
    }

    if (!active) return;

    setTimeout(() => {
      setRevealed(0);
      setDone(false);
    }, 0);

    if (tokens.length === 0) {
      setTimeout(() => {
        setDone(true);
      }, 0);
      onCompleteRef.current?.();
      return;
    }

    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;

      if (index >= tokens.length) {
        setDone(true);
        onCompleteRef.current?.();
        return;
      }

      index += 1;
      setRevealed(index);

      const token = tokens[index - 1]!;
      const delay = isMathToken(token)
        ? 90 + Math.random() * 50
        : token === "\n"
          ? 140
          : /^\s+$/.test(token)
            ? 0
            : 22 + Math.random() * 30;

      timeoutId = setTimeout(tick, delay);
    };

    timeoutId = setTimeout(tick, 160 + Math.random() * 140);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [streamKey, active, reducedMotion, text, tokens, tokens.length]);

  const visibleText = useMemo(
    () => tokens.slice(0, revealed).join(""),
    [tokens, revealed],
  );

  return (
    <span
      role="presentation"
      onClick={done ? undefined : finish}
      className={done ? undefined : "cursor-pointer"}
      title={done ? undefined : "Click to show all"}
    >
      <MathText text={visibleText} />
      {!done && active && (
        <span
          aria-hidden
          className="inline-block w-[2px] h-[0.95em] bg-[var(--ink-muted)] ml-[1px] align-[-0.08em] inference-cursor"
        />
      )}
    </span>
  );
}

type StreamingTheoryParagraphsProps = {
  streamKey: string;
  paragraphs: string[];
  paragraphClassName?: string;
};

/** Theory / aim copy — paragraphs stream one after another. */
export function StreamingTheoryParagraphs({
  streamKey,
  paragraphs,
  paragraphClassName,
}: StreamingTheoryParagraphsProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [activePara, setActivePara] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActivePara(0);
    }, 0);
  }, [streamKey]);

  const handleParaComplete = useCallback(() => {
    setActivePara((i) => Math.min(i + 1, paragraphs.length));
  }, [paragraphs.length]);

  const skipAll = useCallback(() => {
    setActivePara(paragraphs.length);
  }, [paragraphs.length]);

  if (reducedMotion) {
    return (
      <>
        {paragraphs.map((p, i) => (
          <p key={i} className={paragraphClassName}>
            <MathText text={p} />
          </p>
        ))}
      </>
    );
  }

  const streaming = activePara < paragraphs.length;

  return (
    <div
      role="presentation"
      onClick={streaming ? skipAll : undefined}
      className={streaming ? "cursor-pointer" : undefined}
      title={streaming ? "Click to show all" : undefined}
    >
      {paragraphs.map((p, i) => {
        if (i < activePara) {
          return (
            <p key={i} className={paragraphClassName}>
              <MathText text={p} />
            </p>
          );
        }

        if (i === activePara) {
          return (
            <p key={i} className={paragraphClassName}>
              <StreamingMathText
                key={`${streamKey}:${i}`}
                text={p}
                streamKey={`${streamKey}:${i}`}
                active
                onComplete={handleParaComplete}
              />
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}
