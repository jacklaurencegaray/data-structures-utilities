import countingSort from "../counting-sort";
import mergeSort from "../merge-sort";
import quickSort from "../quick-sort";
import radixSort from "../radix-sort";

describe("Sorting algorithms sort numbers correctly", () => {
  const maxArrLength = 100;
  const maxNumberValue = 100000;
  const unsortedArr = [];

  // Generate random length for array
  const arrLength = Math.floor(Math.random() * maxArrLength);

  // Create new unsorted array with random elements
  // with the newly created random length
  for (let i = 0; i < arrLength; i++)
    unsortedArr.push(Math.floor(Math.random() * maxNumberValue));

  it("Merge sort: sorts correctly", () => {
    expect(mergeSort(unsortedArr)).toEqual(unsortedArr.sort());
  });

  it("Quick sort: sorts correctly", () => {
    expect(quickSort(unsortedArr)).toEqual(unsortedArr.sort());
  });
});
