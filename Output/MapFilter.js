const arr = [1, 2, 3];

const x = arr.forEach(num => num * 2);
const y = arr.map(num => num * 2);

console.log(x); // ?
console.log(y); // ?



////////////////////////////////

const nums = [0, 1, 2, 3, 4, 5];

const result = nums.filter(Boolean);

console.log(result); // ?
//Boolean as callback removes all falsy values (0, false, null, undefined, "").


///////////////////////
const arr1 = [10, 20, 30];

const sum = arr.reduce((a, b) => a + b);

console.log(sum); // ?