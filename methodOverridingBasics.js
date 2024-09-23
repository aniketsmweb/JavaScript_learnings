class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    run(){
        return `${this.name} is running`;
    }
    eat(){
        return `${this.name} is eating`;
    }
}
class Dog extends Animal{
    constructor(name,age,speed){     //calling super class constructor
        super(name,age);
        this.speed=speed;
    }
    run(){
        return `${this.name} can runn at fast`; // overridding method 
    }
}
const tommy= new Dog("Tommy",8,50);
console.log(tommy.run());

339925351165