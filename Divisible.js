var read=require("readline-sync")
var number=read.question("Enter a number:")
if(number%7===0){
    console.log("Divisible by given number");
}else{
    console.log("Not Divisible by the given number");
}