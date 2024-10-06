 const btn=document.querySelector("button");
 const bdy=document.body;
 const span=document.querySelector(".current-clr");


 function randomcolor(){
    const red=Math.floor(Math.random() * 226);
    const green=Math.floor(Math.random() * 226);
    const blue=Math.floor(Math.random() * 226);
    const randomclr=`rgb(${red},${green},${blue})`;
    return randomclr;
 }

 btn.addEventListener("click",()=>{
    const randomclr=randomcolor();
    bdy.style.backgroundColor=randomclr;
    span.textContent=randomclr;
 });
 

//  bdy.addEventListener("keypress",(e)=>{
//     console.log(e.key);
//  })
// btn.addEventListener("mouseover",()=>{
//     console.log("mouseover event occoured!!!");
// })

// btn.addEventListener("mouseleave",()=>{
//     console.log("mouseover event occoured!!!");
// })



