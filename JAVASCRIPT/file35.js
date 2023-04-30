//Arrray Destructing

const myArray=["value1","value2","value3"];

let myvar1=myArray[0];
let myvar2=myArray[1];

console.log(myvar1,myvar2);

// in javascript we have shortcut to crete this
// this is the shorrtcut way to create theis

let [myv1,myv2]=myArray;
console.log(myv1,myv2);

// in this way how we can do

let [m1]=myArray;
console.log(m1);

// to skip value

// let [m1, , m3]=array;


