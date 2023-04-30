// HOW TO MAKE A CLONE OF ARRAY

let a1=[10,20,30];

// below there are various methods that will help to
// u know to make array clone in javascript

let a2=a1.slice(0,a1.length);

let a3=[].concat(a1);


// new way 

// spread operator
let a4=[...a1];

console.log("a4" +a4+"\n");
console.log(a2);

// fastest methond is slice method
// most peple use spread operator

// another way to add or concateneate element in new array
let test=["yogesh","harsh"];
let newarr=test.slice(0).concat([10,20])
console.log(" newarr = ",newarr);

// if u want to make a clone array with adding extra element

let arrr=a1.slice(0).concat(a2).concat(["hello"]);

// The above code will add sliced a1 array from index 0 to last
// and then it will concatenate a2 array and the concatenate
// hello array

console.log("\n");

// another method using spread operator

console.log("SPREAD OPERATOR METHOD ");

let spr=["c++","python","java"];
let con=[...spr,"go","c","javascript"];
console.log(con+"\n");

//************************************************** */
// this below method will concatenate two arrays in a nedw
// empty arrays


let a5=[].concat(spr,a2);
console.log("a5",a5,"\n");

//******************************************************* */

// ANOTHER METHOD USING SPREAD OPERATOR

let a11=[10,20,30,40];
let a12=[50,60,70,80];

let a33=[...a11,...a12];

console.log(" a33  => ",a33,"\n");

//***************************************************** */

let a6=[...a1,10,20,30,40,50,154];
console.log(a5);

console.log(arrr);
