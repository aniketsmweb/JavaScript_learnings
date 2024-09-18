// const isEven=function(number){
//     return number%2==0;
// }
// console.log(isEven(2));


// //same can also be written as 
// const isOdd=(num)=>num%2!=0;
// console.log(isOdd(2));

// function functionName(parameters){
//     //code to be executed;
// }


function myFunc2(name){
    console.log("inside my func2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("I am myfunc");
    callback("Aniket");
}
myFunc(myFunc2);

function myFunc(){
    function hello(){
        return "hello world"
    }
    return "hello";
}
const ans=myFunc();
console.log(ans);
