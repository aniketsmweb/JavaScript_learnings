const userMethods={
    about(){
        return `${this.firstName} is ${this.age} yrs old`;
    },
    is18(){
        return this.age>=18;
    },
    maiyaha(){
        return "hai yaha huuuuu";
    }
}
function createUser(firstName,lastName,email,phone,age,address){
    const user=Object.create(userMethods);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.phone=phone;
    user.age=age;
    user.address=address;
    // user.about=userMethods.about;
    // user.is18=userMethods.is18;
    return user;
}

const user1=createUser("Aniket","Mogare","aniket@gmail.com",866224564,24,"my address");
const user2=createUser("Shubham","yeole","shubham@gmail.com",8895745544,15,"my address 2");

console.log(user2.maiyaha());


//checking is the object1 is proto of obj2 
const obj1={
    key1:"value1",
    key2:"value2",
}
const obj2=Object.create(obj1);
obj2.key3="value3";

console.log(obj2.__proto__);// prints on my pc [[prototype]] can also print __proto__

console.log(user1);