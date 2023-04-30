// While loops in array

const fruit=["apple","mango","banana"];
const fruit2=[];

let i=0;
while(i<fruit.length)
{
    fruit2.push(fruit[i].toUpperCase());
    i++;
}

console.log(fruit2);