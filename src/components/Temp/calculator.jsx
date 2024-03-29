export function toCelsius(farenhite) {
  return ((farenhite - 32) * 5) / 9;
}
export function toFarenhite(celsius) {
  return (celsius * 9) / 5 + 32;
}
export function convert(temp, convertTo) {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertTo(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
