const trackClassName = "items-center flex gap-2";
const segmentClassName = "items-center gap-x-2 inline-flex";

const dotBase =
  "bg-[var(--line-strong)] rounded-full h-2 transition-[background] duration-[220ms] ease-in-out w-2";
const dotActive = [dotBase, "bg-[var(--color-blue)] scale-125"].join(" ");
const dotCompleted = [dotBase, "bg-[var(--color-blue)]"].join(" ");

const connectorBase = "bg-[var(--line-strong)] flex-1 h-px max-w-8";
const connectorCompleted = [connectorBase, "!bg-[var(--color-blue)]"].join(" ");

function dotClassName(state: "active" | "completed" | "upcoming") {
  if (state === "active") return dotActive;
  if (state === "completed") return dotCompleted;
  return dotBase;
}

// A row of dots tracking progress through a fixed sequence of steps. Generic:
// the consumer passes how many steps there are and which is active.
export function StepIndicator({
  activeStepIndex,
  stepCount,
}: {
  activeStepIndex: number;
  stepCount: number;
}) {
  const stepNumbers = Array.from(
    { length: stepCount },
    (_unused, index) => index + 1,
  );

  return (
    <div
      aria-valuemax={stepCount}
      aria-valuemin={1}
      aria-valuenow={activeStepIndex + 1}
      className={trackClassName}
      role="progressbar"
    >
      {stepNumbers.map((stepNumber) => {
        const dotIndex = stepNumber - 1;
        const state =
          dotIndex < activeStepIndex
            ? "completed"
            : dotIndex === activeStepIndex
              ? "active"
              : "upcoming";
        return (
          <span className={segmentClassName} key={`step-${stepNumber}`}>
            <span className={dotClassName(state)} />
            {stepNumber === stepCount ? null : (
              <span
                className={
                  dotIndex < activeStepIndex
                    ? connectorCompleted
                    : connectorBase
                }
              />
            )}
          </span>
        );
      })}
    </div>
  );
}
