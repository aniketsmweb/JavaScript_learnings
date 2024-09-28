//closure
function hello(x){
    const a="var A";
    const b="var B";
    return function(){
        console.log(a,b,x);
    }
}

const ans=hello("args");
ans();