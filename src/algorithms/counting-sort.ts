export default function countingSort([...arr]) {
  let n = arr.length;
  const occurrencesArr = new Array(n).fill(0);
  const accumulationArr = new Array(n).fill(0);
  const sortedArr = new Array(n).fill(undefined);

  for (let i = 0; i < n; i++) occurrencesArr[arr[i]]++;

  accumulationArr[0] = occurrencesArr[0];
  for (let i = 1; i < n; i++)
    accumulationArr[i] = accumulationArr[i - 1] + occurrencesArr[i];

  accumulationArr.unshift(0);
  accumulationArr.pop();

  for (let i = 0; i < n; i++) {
    sortedArr[accumulationArr[arr[i]]++] = arr[i];
  }

  return sortedArr;
}
