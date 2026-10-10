import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Binary file I/O using fread/fwrite provides efficient, compact storage for structured data. The fixed-size struct enables O(1) random access via fseek with a calculated byte offset, making binary files suitable for simple database-like applications.",
    "fseek with SEEK_SET, SEEK_CUR, and SEEK_END provides complete control over the file position indicator, allowing both sequential and random access patterns. The ftell function is useful for measuring file size and saving/restoring position.",
    "Binary files are not portable across platforms with different struct padding or endianness. For cross-platform data exchange, use serialization formats (JSON, Protocol Buffers, or explicit byte-order-neutral binary formats). For local applications where portability is not a concern, binary files with fixed-size structs are an efficient and simple solution.",
  ],
};
