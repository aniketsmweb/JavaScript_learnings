class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
        
    }

    run(){
        return `${this.name} is running at the speed of 80kmph`;
    }

}
class Dog extends Animal{
    

}


const animal1= new Animal("Tiger",8);
const tommy=new Dog("Tommy",5);
console.log(tommy.run());
