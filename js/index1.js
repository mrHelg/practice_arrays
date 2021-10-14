// concat
const array1a = [1, 2, 3];
const array1b = [4, 5, 6];
const concated = array1a.concat(array1b);
console.log(concated);

// reverse
const array2 = [1, 2, 3];
array2.reverse();
console.log(array2);

// push
const array3 = [1, 2, 3];
array3.push(4, 5, 6);
console.log(array3);

// unshift
const array4 = [1, 2, 3];
array4.unshift(4, 5, 6);
console.log(array4);

// shift
const array5 = ['js', 'css', 'html'];
const result5 = array5.shift();
console.log(result5);

// pop
const array6 = ['js', 'css', 'html'];
const result6 = array6.pop();
console.log(result6);

// slice-1
const array7 = [1, 2, 3, 4, 5];
const result7 = array7.slice(0, 3);
console.log(result7);

// slice-2
const array8 = [1, 2, 3, 4, 5];
const result8 = array8.slice(-2);
console.log(result8);

// splice-1
const array9 = [1, 2, 3, 4, 5];
array9.splice(1, 2);
console.log(array9);

// splice-2
const array10 = [1, 2, 3, 4, 5];
array10.splice(array10.length, 0, 2, 3, 4);
console.log(array10);

// splice-3
const array11 = [1, 2, 3, 4, 5];
array11.splice(3, 0, 'a', 'b', 'c');
console.log(array11);

// splice-4
const array12 = [1, 2, 3, 4, 5];
array12.splice(1, 0, 'a', 'b'); // [1, 'a', 'b', 2, 3, 4, 5]
array12.splice(6, 0, 'c'); // [1, 'a', 'b', 2, 3, 4, 'c', 5]
array12.splice(array12.length, 0, 'e'); // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
console.log(array12);

// sort
const array13 = [3, 4, 1, 2, 7];
array13.sort((a, b) => a - b);
console.log(array13);

// Object.keys
const obj = {
  js: 'test',
  jq: 'hello',
  css: 'world',
};
const array14 = [];
for (let i in obj) {
  array14.push(i);
}
console.log(array14);
