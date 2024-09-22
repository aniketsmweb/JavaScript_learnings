function CreateUser(firstName,lastName,email,phone,age,address){
    // const user=Object.create(createUser.prototype);
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.phone=phone;
    this.age=age;
    this.address=address; 
    // user.about=userMethods.about;
    // user.is18=userMethods.is18;
   
}
CreateUser.prototype.about=function(){
        return `${this.firstName} is ${this.age} yrs old`
    };
CreateUser.prototype.is18=function(){
             return this.age>=18;
    };

      

const user1=new CreateUser("Aniket","Mogare","aniket@gmail.com",866224564,24,"my address");
const user2=new CreateUser("Shubham","yeole","shubham@gmail.com",8895745544,15,"my address 2");
console.log(user2.about());