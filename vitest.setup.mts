import { expect } from "vitest";

function isComparableTemporalObject(a) {
  return !!Object.prototype.toString
    .call(a)
    .match(/\[object Temporal\.(?!Duration).*\]/);
}

function isTemporalDuration(a) {
  return Object.prototype.toString.call(a) === "[object Temporal.Duration]";
}

function temporalEqual(a, b) {
  // Don't allow compare durations to be compared without using `compareTo`
  // which exposes the relativeTo option
  if (isTemporalDuration(a)) return false;

  const isATemporal = isComparableTemporalObject(a);
  const isBTemporal = isComparableTemporalObject(b);

  if (isATemporal && isBTemporal) {
    return a.equals(b);
  } else if (isATemporal === isBTemporal) {
    return undefined;
  } else {
    return false;
  }
}

expect.addEqualityTesters([temporalEqual]);
