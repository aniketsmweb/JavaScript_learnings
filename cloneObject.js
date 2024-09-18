const obj={
    key1:"value1",
    key2:"value2",
  
}

const obj2={...obj};// cloning by using spread operator

obj.key3="value3";
console.log(obj);
console.log(obj2);

//cloning by using Object.assign
const obj3=Object.assign({},obj);
console.log(obj3);
