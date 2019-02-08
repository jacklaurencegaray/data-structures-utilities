import countingSort from "../counting-sort";

it("sorts the array correctly", () => {
  expect(countingSort([5, 2, 9, 11, 19, 22, 51, 12])).toStrictEqual([
    2,
    5,
    9,
    11,
    12,
    19,
    22,
    51
  ]);
});
