//tin this exercise i am changing the background color of the button once it is clicked 

//without loops approach
// const firstButton=document.querySelector(".one");
// firstButton.addEventListener("click",(e)=>{
//     e.currentTarget.style.backgroundColor="yellow";
// })


//with loop aproach
const allButtons=document.querySelectorAll(".buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.currentTarget.style.backgroundColor="yellow";
    })
})
