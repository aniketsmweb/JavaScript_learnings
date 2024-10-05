const allbuttons=document.querySelectorAll(".buttons button");

for(let btn of allbuttons){
    btn.addEventListener("click",(abc)=>{
        console.log(abc.currentTarget.textContent);
    })
}