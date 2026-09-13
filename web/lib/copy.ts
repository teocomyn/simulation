export function stripEmDashes(value: string) {
  return value.replace(/\s*—\s*/g, ", ").replace(/—/g, ", ");
}
