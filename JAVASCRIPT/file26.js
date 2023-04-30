// INTRO TO ARRAYS

// reference type
// arrays are mutable
// means that you can change the value  of array

// u can store any data type in array


// array is object in java script
// HOW TO CREATE ARRAYS


// collectiohn of similar data type

let alpha=["10","hello","world"];

let number=[1,2,3,4];

let fixed=[1,2,3,4 ,null,"string"]

console.log(fixed);
console.log(alpha);
console.log(number);

alpha[0]=100;
console.log(alpha);

console.log(typeof alpha);

// below function will tell you wheter the given data type is array or not

console.log(Array.isArray(alpha)); 

