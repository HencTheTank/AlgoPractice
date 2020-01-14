function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  if (arr1.length === 0 && arr2.length > 0) return arr2;
  if (arr2.length === 0 && arr1.length > 0) return arr1;
  while (arr1[i] || arr2[j]) {
    if (arr1[i] < arr2[j] || !arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  console.log(result);
  return result;
}

array1 = [0, 10, 11];
array2 = [4, 6, 30, 41];
mergeSortedArrays(array1, array2);
