
const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
//event capturing
child.addEventListener("click",()=>{
    console.log("capturing child clicked!!!");
},true)

parent.addEventListener("click",()=>{
    console.log("capturing parent clicked!!!");
},true)

grandparent.addEventListener("click",()=>{
    console.log("capturing grandparent clicked!!!");
},true)





//event bubbling
child.addEventListener("click",()=>{
    console.log("Bubbling child clicked!!!");
})

parent.addEventListener("click",()=>{
    console.log("Bubbling parent clicked!!!");
})

grandparent.addEventListener("click",()=>{
    console.log("Bubbling grandparent clicked!!!");
})