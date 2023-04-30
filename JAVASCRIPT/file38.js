// HOW TO ITERATE OBJECT IN JAVASCRIPT

const person={

    name:"yogesh",
    age:20,
    city:"guna"
}

console.log(person);


// TWO WAYS TO ITERATE ON OBJECT
// FOR IN LOOP
// OBJECT.KEYS

// this will print only keys
for(let key in person)
{
    console.log(key);
}
console.log("\n");

// for getting the values

for(let key in person){

    console.log(person[key]);
}

// for both key and value pair u need to do this
// using templates string
console.log();

for(let key in person){

    console.log(`${key}:${person[key]}`)
}

// without using template string

console.log();
for(let key in person){
    console.log(key,person[key]);
}
console.log();
// another way to get keys of object
console.log(Object.keys(person));

// to check object is array or not

const val=Array.isArray(Object.keys(person));
console.log(val);

// another mehtod

for(let key of Object.keys(person)){
     
    console.log(person[key]);
}