//sets (it is iterable)
//store data 
//sets also have its own methods
//no index-based access
//order is not garented
//umique items only (no duplicates are allowed)

const items=['item1','item2','item3'];
const numbers=new Set();
numbers.add(1);//add elements to sets
numbers.add(2);
numbers.add(3);
numbers.add(items);
numbers.add(items);

console.log(numbers);

/////////example 2

const myArray=[1,2,3,4,3,5,6,5,6,2];

const uniqueElements= new Set(myArray);
console.log(uniqueElements);
//checking for a value in set
console.log('is value 3 present =',uniqueElements.has(3));
//for of loop on sets
for(let elemet of uniqueElements){
    console.log(elemet);
}
///finding length of sets
console.log(uniqueElements.length);// does not work on sets o/p undefined
let length=0;
for(let elementValue of uniqueElements){
    length++;
}
console.log('length of uniquelements is ',length);
console.log(uniqueElements.size);// method for checking size of set