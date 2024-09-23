//static methods and properties
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    static city="pune";
    static classInfo(){
        return "this is info metod";
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const Person1=new Person("aniket","mogare",24);
Person1.fullName="Shubham Yeole";
console.log(Person1.fullName);

console.log(Person.classInfo());
console.log(Person.city);
