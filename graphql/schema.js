import { readFileSync } from "node:fs";

export const schema = readFileSync(
  new URL('schema.gpl', import.meta.url),
  'utf-8'
);
