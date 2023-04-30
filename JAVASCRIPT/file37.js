// diffrence between dot notation and bracket notation
// in objects

// bracket notaton helps a developer to create object key
// name with spaces right as shown below

const car={

    name:"nano",
    manufacturing:2020,
    price:"5lakh",
    "car otherModels":[2006,2005,2009]

}
console.log(car["car otherModels"]);

// suppose u need to insert a key in this above
// object and u have to insert a key form a variable
// see below for more explanation

const key="email";

// car.key="y@gmail.com";
// console.log(car);

// this will store only key not the value of key that is emaill

// right way

car[key]="y@gmail.com";
console.log(car);
