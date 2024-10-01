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
// mainHeading.style.color="blue"; // changes text color 
// mainHeading.style.border="10px solid orange";// changes border


//get and set Attributes
// const link=document.querySelector("a");
// link.setAttribute("href","#hometest");
// console.log(link.getAttribute("href"));

// const inputElement=document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

//get multiple elements using get element by class Name
// const navItems=document.getElementsByTagName("a");
// for(nav of navItems){
//     nav.style.color="green";
//     nav.style.backgroundColor="white";
//     nav.style.fontWeight="bold";
// }
const headline=document.querySelector(".headline");
// console.log(headline.innerHTML);
headline.innerHTML="<h1>Inner HTML cnanged</h1>";
headline.innerHTML+="<button class=\"btn\" >Learn More</button>";

