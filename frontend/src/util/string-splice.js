export default function StringSplice(text, length = 8) {
  const displayText =
    text && text.length > length ? text.slice(0, length) + "…" : text;
  return displayText;
}
