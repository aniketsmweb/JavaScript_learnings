//sets basics revision for blogs
const item=["item1","item2","item3"];
const numbers= new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(1);// will not be added 
numbers.add(item);

console.log(numbers);

const myArray=[1,2,3,4,52,1,3,7,78];
const uniqueElements=new Set(myArray);
console.log(uniqueElements.has(3));
console.log(uniqueElements.size);

// Maps
const person=new Map();
person.set('firstname','Aniket');
person.set("age",7);
person.set(1,"one");
console.log(person);
console.log(typeof(person.keys()));// this claerly indicated that key
for(let [key,value] of person)
    {
     console.log(key," , ",value);
    }

const personDetails={
    id:1,
    firstname:"Aniket"
}
const extraInfo=new Map();
extraInfo.set(personDetails,{age:24,gener:"male"});
console.log(extraInfo.get(personDetails).age);
