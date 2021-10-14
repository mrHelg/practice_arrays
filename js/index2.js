// 1
const hasElem = (arr, item) => arr.includes(item);

// 2
const array2 = [2, 5, 9, 11, 15];
const number = 52;
console.log(hasElem(array2, number));

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
console.log(hasTwoNumbers(array3));

// 4
const MIN_VALUE = 15;
const MAX_VALUE = 78;
const myRandom = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const array4 = [];
for (let i = 0; i < 10; i++) {
  array4.push(myRandom(MAX_VALUE, MIN_VALUE));
}
console.log(array4);

// 5 (option 1)
const array5a = [4, -2, 5, 19, -130, 0, 10];
const getMaxOfArray1 = (arr) => Math.max.apply(null, arr);
const getMinOfArray1 = (arr) => Math.min.apply(null, arr);
console.log('Max value (option 1) = ' + getMaxOfArray1(array5a));
console.log('Min value (option 1) = ' + getMinOfArray1(array5a));

// 5 (option 2)
const array5b = [4, -2, 5, 19, -130, 0, 10];
const sortArray = (arr) => arr.sort((a, b) => a - b);
const getMaxOfArray2 = (arr) => {
  sortArray(arr);
  return arr[arr.length - 1];
};
const getMinOfArray2 = (arr) => {
  sortArray(arr);
  return arr[0];
};
console.log('Max value (option 2) = ' + getMaxOfArray2(array5b));
console.log('Min value (option 2) = ' + getMinOfArray2(array5b));

// 6 (option 1)
const array6a = [12, 15, 20, 25, 59, 79];
const average6a = (arr) =>
  arr.reduce((summa, item) => summa + item) / arr.length;
console.log('Avarage (option 1) = ' + average6a(array6a));

// 6 (option 2)
const array6b = [12, 15, 20, 25, 59, 79];
const avarage6b = (arr) => {
  let summa = 0;
  array6b.forEach((item) => (summa += item));
  return summa / arr.length;
};
console.log('Avarage (option 2) = ' + avarage6b(array6b));
