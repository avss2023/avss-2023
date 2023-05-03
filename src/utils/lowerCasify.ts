export default function lowerCasify(str: string) {
  return str
    .toLowerCase()
    .split(/\s+?\/\s+?|\s+/)
    .join("-");
}
