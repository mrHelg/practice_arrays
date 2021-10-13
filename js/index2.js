// 1
const hasElem = (arr, item) => arr.includes(item);

//2
const arr2 = [2, 5, 9, 11, 15];
const number = 52;
// console.log(hasElem(arr2, number));

//3
const hasTwoNumbers = (arr) => {
  if (arr.length < 2) {
    return false;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
};
const arr3 = [1, 2, 3, 3];
console.log(hasTwoNumbers(arr3));
