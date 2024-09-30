//DOm
// console.log(window.document);
// console.dir(window.document);
//getElementById

console.log(typeof document.getElementById("main-heading"));

// const mainHeading=document.getElementById("main-heading");
// console.log(mainHeading);

//querySelector
const mainHeading=document.querySelector("div.headline h2");
// mainHeading.textContent="this is something element";
// console.log(mainHeading.style);//returns style object
mainHeading.style.color="blue";
mainHeading.style.border="10px solid orange";


const navItems=document.querySelectorAll(".nav-items a")
