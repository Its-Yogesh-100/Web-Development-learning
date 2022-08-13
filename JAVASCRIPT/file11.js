// UNDEFINED
//NULL

let Fname;
console.log(typeof Fname);

firastName="hello";
console.log(typeof firastName,Fname );

//null

let myVariable=null;
console.log(myVariable,typeof myVariable);


// this is the type of error in javascript when you 
// print the datatype of null or null variable it will
// give you the output as 'object' 

// this bug is not solve by javascript because
// by considering this code millions of people had written 
//their code.So if this bug is fixed then the whole code should
// need to be fixed

console.log(typeof myVariable);


//BIGINT
// it comes latestly in 2020

let myNum=123;
console.log(myNum);

// The below code will tell you maximum safe limit of number
// in javascript

console.log("the range of number is ",Number.MAX_SAFE_INTEGER);


// to store more big number we can use BIGINT datatype

let num= BigInt(1234979494634943167461654646);
let k=BigInt(10);

// this is also a way to declare bigint variable

let ww=1231231n;

console.log(num);
console.log(k);

console.log(ww+k);

// BE CAREFUL that u cannot mix bigint with other datatype
// BigInt maths operation will work with only bigint