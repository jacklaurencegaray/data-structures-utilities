import quickSort from "../quicksort";

it("sorts the array correctly", () => {
  expect(quickSort([5, 2, 9, 11, 19, 22, 51, 12])).toStrictEqual([
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
