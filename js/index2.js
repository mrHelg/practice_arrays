// 1
const hasElem = (arr, item) => arr.includes(item);

// 2
const array2 = [2, 5, 9, 11, 15];
const number = 52;
// console.log(hasElem(array2, number));

// 3
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
const array3 = [1, 2, 3, 3];
// console.log(hasTwoNumbers(array3));

// 4
const MIN_VALUE = 15;
const MAX_VALUE = 78;
const myRandom = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const array4 = [];
for (let i = 0; i < 10; i++) {
  array4.push(myRandom(MAX_VALUE, MIN_VALUE));
}
// console.log(array4);

// 5
const getMaxOfArray = (arr) => Math.max.apply(null, arr);
const getMinOfArray = (arr) => Math.min.apply(null, arr);
const array5 = [4, -2, 5, 19, -130, 0, 10];
// console.log(getMaxOfArray(array5));
// console.log(getMinOfArray(array5));

// 6
const array6 = [12, 15, 20, 25, 59, 79];
const reducer = (summa, item) => summa + item;
const average = (arr) => arr.reduce(reducer) / arr.length; 
console.log(average(array6));
