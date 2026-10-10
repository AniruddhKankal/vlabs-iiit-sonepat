import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "File I/O in C is handled through the standard library `<stdio.h>`. All file operations work through a FILE pointer — an opaque structure that holds the state of an open file (buffer, position, error flags). The programmer never accesses the FILE structure directly; all operations go through library functions.",
    'Opening a file: `FILE *fp = fopen(filename, mode)`. Mode strings: "r" — open for reading (file must exist). "w" — open for writing (creates or truncates). "a" — open for appending (creates if not exists, writes always go to end). "r+" — open for reading and writing (file must exist). "w+" — open for reading and writing (creates or truncates). "a+" — open for reading and appending. fopen returns NULL on failure (file not found, permission denied). Always check for NULL before using the pointer.',
    "Closing a file: `fclose(fp)` flushes the buffer and releases the file descriptor. Always call fclose when done — leaving files open wastes system resources and may lose data still in the write buffer. On program exit, all open files are closed, but it is best practice to close explicitly.",
    'Writing to a text file: `fprintf(fp, "format", ...)` — works like printf but writes to fp. `fputs(str, fp)` — writes a string (no newline appended, unlike puts). `fputc(ch, fp)` — writes one character.',
    'Reading from a text file: `fscanf(fp, "format", &var)` — works like scanf but reads from fp. Returns number of items read or EOF. `fgets(buffer, size, fp)` — reads a line (up to size-1 chars, stops at \\n or EOF, null-terminates). Preferred over gets (which has no buffer limit). `fgetc(fp)` — reads one character, returns int (to accommodate EOF = -1).',
    "Error handling: `feof(fp)` returns non-zero if end-of-file was reached. `ferror(fp)` returns non-zero if an error occurred on fp. `clearerr(fp)` clears both EOF and error flags. Always check return values: fscanf returns the number of items successfully matched; fgets returns NULL at EOF or error.",
  ],
};
