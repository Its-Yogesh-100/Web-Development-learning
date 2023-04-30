//array methods

// array shift and undhift

let fruits=["apple","mango","grapes "];
console.log(fruits);

// push operation will push the element in array 
// from the back
fruits.push("banana");

console.log(fruits);

// pop operaion will remove the element from array from the last

fruits.pop("banana");
console.log(fruits);

//pop operation also b implemented as

let popu=fruits.pop();
console.log("pop item is ",popu);


// NOW we will talk about adding element in array 

// for adding element in starting

// unshift function helps to add element in start
// u can also add multiple items



fruits.unshift("watermeleon");
fruits.unshift("apple");
console.log(fruits);

// SHIFT will remove elements from startting 

fruits.shift();
console.log(fruits);

let remo=fruits.shift();
console.log(remo);

//@@@ Push and pop are fast as compared to shift and unshift
