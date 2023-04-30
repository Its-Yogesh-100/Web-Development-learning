// STRING METHODS

//  trim() --> used to remove the extra spaces

// toUpperCase()

// toLowerCase()

// slice


let firstName=" yogeSh   ";
console.log(firstName.length);

firstName.trim();
console.log(firstName.length);
// u can see length not changed
// because strings are immutable
// so trim funciton will return new string

let newString=firstName.trim();
console.log(newString.length);

// now u can see that lenght of newString has 
// changed


// u can also use it in this manner also
// so we will update value in previous variable

firstName=firstName.trim();
console.log(firstName.length);

//************************************* */

// toUpperCase
console.log(firstName.toUpperCase());
//or

firstName=firstName.toLocaleLowerCase();
console.log(firstName);


// slice method

//start index
// end index

let newVar=firstName.slice(2,4); // 4 is excluded
console.log(newVar);


let n="hello";
n=n.slice(1,4);
console.log(n);
// output will be "yoge"