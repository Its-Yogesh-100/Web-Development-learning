// nested if and else

let k=20;
console.log(`hello ${k}`);

// LETS  MAKE THE GUESSSING GAME

let WinningNum=56;
let GuessNum= +prompt("Guess the number !!!");

if(GuessNum===WinningNum)
{
    console.log("!!! CORRECT 😁😁😁😁😁😁😁!!!!");
}   
else
{
     if(GuessNum>WinningNum)
     {
        console.log("!!! TOO high lol 😠😠😠😠😠😠 !!! ");
     }
     else
     console.log("!!! TOO low lol 🤣🤣🤣🤣🤣🤣🤣🤣🤣!!!!")
}