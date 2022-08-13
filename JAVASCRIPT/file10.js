// TEMPLATE STRING

let age=22;

let name="yogesh";

// my name is yogesh my age is 22

let aboutme="my name is " + name + " my age is " + age;
console.log(aboutme);

// but it is so tideous work
// we use template to overcome from this problem

// u can use " ", ' ', ` `
let aboutMe=`my name is ${name} my age is ${age}`;
console.log(aboutMe);