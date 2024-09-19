// call apply bind
// function about(hobby,favMusician){
//     console.log(this.firstName,this.age,hobby,favMusician);
// }

const user1={
    firstName:"Aniket",
    age:24,
    about:function(city,state){
        console.log(this.firstName,this.age,city,state);
    }
}

const user2={
    firstName:"shubham",
    age:27
}

// user1.about.call(user2,"nashik");
// user1.about.apply(user2,["pune","maharashtra"]);// preceding argumments passed as ana array

const func=user1.about.bind(user2,"nashik","maharashtra");//creates a new function
func();