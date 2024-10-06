console.log("Script start !!");
const allButtons=document.querySelectorAll(".buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
            let num=0;
            for(let i=0;i<=100000000000;i++){
                num+=i;
            }
            console.log(e.currentTarget.textContent, num);
    })
});

let outerVar=0;
for(let i=0;i<=10000000000;i++){
    outerVar+=i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end !!!!!!!");
