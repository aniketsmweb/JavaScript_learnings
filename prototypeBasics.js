// const userMethods={
//     about(){
//         return `${this.firstName} is ${this.age} yrs old`;
//     },
//     is18(){
//         return this.age>=18;
//     },
//     maiyaha(){
//         return "hai yaha huuuuu";
//     }
// }
function createUser(firstName,lastName,email,phone,age,address){
    const user=Object.create(createUser.prototype);
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
createUser.prototype.about=function(){
        return `${this.firstName} is ${this.age} yrs old`
    };
createUser.prototype.is18=function(){
             return this.age>=18;
    };

      

const user1=createUser("Aniket","Mogare","aniket@gmail.com",866224564,24,"my address");
const user2=createUser("Shubham","yeole","shubham@gmail.com",8895745544,15,"my address 2");
console.log(user1.about());

// console.log(user2.maiyaha());


