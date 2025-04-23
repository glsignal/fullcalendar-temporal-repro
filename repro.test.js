import { Temporal } from "temporal-polyfill";

test("native strict comparison", () => {
  expect(
    Temporal.PlainDate.from("2020-01-01") ===
      Temporal.PlainDate.from("2022-06-30")
  ).not.toBeTruthy();
});

test("native loose comparison", () => {
  expect(
    Temporal.PlainDate.from("2020-01-01") ==
      Temporal.PlainDate.from("2022-06-30")
  ).not.toBeTruthy();
});

test("vitest deep comparison", () => {
  // Currently fails - the objects incorrectly appear equal
  expect(Temporal.PlainDate.from("2020-01-01")).not.toEqual(
    Temporal.PlainDate.from("2022-06-30")
  );
});

test("vitest strict comparison", () => {
  // Currently fails - the objects incorrectly appear equal
  expect(Temporal.PlainDate.from("2020-01-01")).not.toStrictEqual(
    Temporal.PlainDate.from("2022-06-30")
  );
});

test("vitest identity comparison", () => {
  expect(Temporal.PlainDate.from("2020-01-01")).not.toBe(
    Temporal.PlainDate.from("2022-06-30")
  );
});
