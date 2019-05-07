function merge(leftArr, rightArr) {
  let sortedArr = [];

  while (leftArr.length && rightArr.length)
    if (leftArr[0] <= rightArr[0]) sortedArr.push(leftArr.shift());
    else sortedArr.push(rightArr.shift());

  sortedArr.push(...leftArr);
  sortedArr.push(...rightArr);

  return sortedArr;
}

export default function mergeSort([...arr]) {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);

  return merge(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle, arr.length))
  );
}
