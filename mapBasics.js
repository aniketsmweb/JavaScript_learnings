//Maps
//map is iterable
//store data in ordered fashion
//store key value pair like objects

// difference between maps and objects
// 1) objects can only have string or sybmol as a Key
// 2)in maps i can use anything as a Key (like Array,number,string)

const person=new Map();
person.set('firstName','Aniket');
person.set('age',7);
person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1:'one'},'oneone');
// console.log(person);

// //how to print
// console.log(person.get('age'));
// console.log(person.keys()); // will print all the keys 

// //for of loop on map
// for(let key of person.keys()){
//     console.log(key, typeof key);// here we can see that key is not always string it can be of any type in map
// }

// // more about for of loop in map
// for(let [key,value] of person){
//     console.log(key," : ",value);

// const person1=new Map([['firstname','aniket'],['age',24]]); // can also create map like this 
// console.log(person1);
const personDetails={
    id:1,
    firstName:"Aniket"
}

const extraInfo=new Map();
extraInfo.set(personDetails,{age:24,gender:"male"});
console.log(extraInfo.get(personDetails).age);
