//methods
//function inside

function personInfo(){
    console.log(`person name is ${this.firstName} and his age is ${this.age}`);
}

const person={
    firstName:"Aniket",
    age:24,
    about: personInfo
}
const person1={
    firstName:"Shubham",
    age:27,
    about:personInfo
}
const person2={
    firstName:"Harsh",
    age:26,
    about:personInfo
}

person2.about();

