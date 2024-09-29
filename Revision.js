const user1={
    firstName:"Aniket",
    age:"24",  
    about(){
        console.log(this.firstName,this.age);
    }
}
const user2={
    firstName:"Shubham",
    age:26,
}

const myfunc=user1.about.bind(user2);
myfunc();
