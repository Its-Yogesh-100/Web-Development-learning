// HOW TO MAKE A CLONE OF ARRAY

let a1=[10,20,30];

// below there are various methods that will help to
// u know to make array clone in javascript

let a2=a1.slice(0,a1.length);

let a3=[].concat(a1);


// new way 

// spread operator
let a4=[...a1];

console.log(a4);
console.log(a2);

// fastest methond is slice method
// most peple use spread operator

// if u want to make a clone array with adding extra element

let arrr=a1.slice(0).concat(a2).concat(["hello"]);

let a5=[].concat(a1,a2);

let a6=[...a1,10,20,30,40,50,154];
console.log(a5);

console.log(arrr);