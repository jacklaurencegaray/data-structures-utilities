export default function sort(...arr) {
  const newArr = arr.slice();
  quickSort(newArr, 0, newArr.length - 1);
  return newArr;
}

function quickSort(arr, low, high) {
  const partitionIndex = partition(arr, low, high);

  if (low < high) {
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

function partition(arr, low, high) {
  const pivotValue = arr[high];
  let left = -1;
  let right = 0;

  while (right < high) {
    if (pivotValue > arr[right]) {
      left++;
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
    right++;
  }

  left++;
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  return left;
}
