import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    'Binary files store data in the same memory representation as the C variables — no conversion to text and back. This makes read/write faster and the files smaller for numeric data (a 4-byte int is stored as exactly 4 bytes, vs up to 11 characters in text mode for "2147483647"). Open binary files with "rb", "wb", "ab", "rb+", "wb+", "ab+" (append "b" to the mode string).',
    "fwrite and fread work with blocks of memory: `size_t fwrite(const void *ptr, size_t size, size_t count, FILE *fp)` — writes count items of size bytes each from ptr. Returns number of items written (should equal count on success). `size_t fread(void *ptr, size_t size, size_t count, FILE *fp)` — reads count items of size bytes each into ptr. Returns number of items successfully read.",
    "To write a struct array: `fwrite(records, sizeof(Student), n, fp)` — writes n Student structs in one call. To read back: `fread(&rec, sizeof(Student), 1, fp)` — reads one struct at a time, or `fread(records, sizeof(Student), n, fp)` — reads up to n structs.",
    "Random access with fseek and ftell: `int fseek(FILE *fp, long offset, int whence)` — moves the file position indicator. whence values: SEEK_SET (from start), SEEK_CUR (from current position), SEEK_END (from end). `long ftell(FILE *fp)` — returns the current file position in bytes from the start. `void rewind(FILE *fp)` — equivalent to fseek(fp, 0, SEEK_SET) + clearerr(fp).",
    "Accessing the n-th record: in a binary file of fixed-size structs, record n starts at byte offset $n \\times \\text{sizeof(struct)}$ from the start. So: `fseek(fp, n * sizeof(Student), SEEK_SET)` positions the file pointer at record n, then `fread(&rec, sizeof(Student), 1, fp)` reads it. This is O(1) random access — far faster than scanning a text file line by line.",
    'Text vs binary file size comparison: for 1000 integer values from 0 to 999: Text file: average ~3 characters + newline = ~4 bytes each = ~4 KB. Binary file: exactly 4 bytes per int = exactly 4 KB. For floating-point: text "3.141593" = 8 chars; binary double = 8 bytes — similar size but binary is exact (no rounding from decimal conversion). For structs with fixed-size fields, binary is almost always more compact and faster.',
  ],
};
