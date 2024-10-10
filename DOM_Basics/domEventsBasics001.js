//intro to events
//click
//3 ways to add events
// 1)
const btn=document.querySelector(".btn-headline");
// button.onclick=function(){
//     console.log("you clicked me!!!!!");
// }
// 2)by using attribute in tag
//3)EventListner
btn.addEventListener("click", ()=>{
    console.log("you clicked me !!!!!!!!!");
    console.dir(this);
});
