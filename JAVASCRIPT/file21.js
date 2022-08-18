 
 // printing the sum of n natural numbr in javascript

 let n=+prompt("Enter the number to print ");

 let i=0;
  let sum=0;
 while(i<=n)
 {
    sum=sum+i;
    i++;
 }
 console.log(`the sum of ${n} natural number is ${sum}`);