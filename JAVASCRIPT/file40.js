// Spread Operators

// How Spread operators works in objests

// spread operator generally use to clone the array
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr3=[...arr1,...arr2,89,69];
// this is how spread operator works

// in terms of string
// const newa=[..."abc"];
// console.log(newa);
// output will be ['a','b','c'];

// const nn=[..."123456789"];
// console.log(nn);
// output will be ['1','2','3','4','5','6','7'];

// Spread operator in terms of Objects


const person={
    key1:"val1",
    key2:"val2"
};

const ob2={
    key1:"value1",
    key4:"value4"
};

// How to clone using spread operator

//const newOject =[...person,...ob2];
//const newOject =[...person,...ob2,key69:"value60"];

// it will add new key to final object


// how to convert array in objects

// const newObjects={..."abc"};
// console.log(newObjects);

const nk={..."abcdefghijklmnopqrstuvwxyz"};
console.log(nk);

console.log(newOject);
