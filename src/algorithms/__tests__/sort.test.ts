import countingSort from "../counting-sort";
import mergeSort from "../merge-sort";
import quickSort from "../quick-sort";
import radixSort from "../radix-sort";

const generateRandomFromRange = (min, max) =>
  Math.floor(Math.random() * max - min);

const comparator = (a, b) => a - b;

describe("Sorting algorithms sort numbers correctly", () => {
  const arrLength = generateRandomFromRange(0, 100);
  const maxNumberValue = generateRandomFromRange(0, 10000);
  const unsortedArr = [];

  // Utility function generates a number within the range
  it("generateRandomNumberFromRange generates random number within range", () => {
    const randomNumber = generateRandomFromRange(0, 1000);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(1000);
  });

  // Create new unsorted array with random elements
  // with the newly created random length
  for (let i = 0; i < arrLength; i++)
    unsortedArr.push(generateRandomFromRange(0, maxNumberValue));

  it("Merge sort: sorts correctly", () => {
    expect(mergeSort(unsortedArr)).toEqual(unsortedArr.sort(comparator));
  });

  it("Quick sort: sorts correctly", () => {
    expect(quickSort(unsortedArr)).toEqual(unsortedArr.sort(comparator));
  });

  it("Count sort: sorts correctly", () => {
    expect(countingSort(unsortedArr)).toEqual(unsortedArr.sort(comparator));
  });
});
