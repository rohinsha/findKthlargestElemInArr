function toFindSecLargestElem(numArr) {
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > numArr[i + 1]) {
      let x = 0;
      x = numArr[i];
      numArr[i] = numArr[i + 1];
      numArr[i + 1] = x;
      i = -1;
    }
  }
  console.log(numArr + " " + "sorted Arr");
  const result = findKthLargestElem(1);
  function findKthLargestElem(kthElement) {
    let searchedElem = numArr[numArr.length - kthElement];
    return searchedElem;
  }
  return result;
}
console.log(toFindSecLargestElem([5, 2, 3, 1, 6]));
