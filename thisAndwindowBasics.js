//console.log(this);
//console.log(window);
// console.log(this===window);
// function myFunc(){
   
//     console.log(this);// prints window object
// }
// myFunc();

function myFunc(){
    "use strict";
    console.log(this);// now this prints undefined;
}
myFunc();
