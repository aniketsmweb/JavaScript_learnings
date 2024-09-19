//this inside arrow functions

const user1={
    firstName:"Aniket",
    age: 24,
    about:()=>{
        console.log(this.firstName,this.age);
    }
}

user1.about.call(user1);