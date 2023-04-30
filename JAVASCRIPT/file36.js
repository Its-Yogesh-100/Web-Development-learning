// OBJECTS IN JAVASCRIPT


// OBJECT IS REFERENCE TYPE
// ARRAYS ARE NOT SUFFICENT TO REPRESENT REAL WORLD DATA
// FOR REAL WORLD DATA
// OBJECTS STORE KEY VALUE PAIRS
// OBJECTS DONT'T HAVE INDEX

// HOW TO CREATE OBJECTS

// this is also known as object literal

const person={name:"YOGESH",age:20,country:"India"};

console.log(person);
console.log(typeof person);

// how to access data form objects
// we can use objectname.key or property

console.log(person.name);
console.log(person.age);

// another way to access the objects is

console.log(person["name"]);
console.log(person["age"]);

// We can also create object in this way also

const car={

    name:"nano",
    manufacturing:2020,
    price:"5lakh",
    otherModels:[2006,2005,2009]
}

console.log(car.name);
console.log(car.manufacturing);
console.log(car.price);
console.log(car.otherModels[0]);


// how to add key value pair to objects

person.gender="male";
console.log(person);