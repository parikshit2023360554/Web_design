//dispaly the hello in js

console.log("hello")

//disfferent type of message scrpit in js 

console.warn("its an error")
console.error("here is an certain error")
// alert("i am using java script to make a web design")
// prompt("write about you")




//java script give us the power to use some tool of the brouser 

//variable in js 

let email = "singhparikshit2004@gmail.com"
console.log(email)


const id = 123345; 
let name = "parikshit singh"
// id = id+1   // it will show error as the id is constant and cannot be change through the runtime program 

console.log(name + id)

let address = "West Bengal"
console.log(typeof address)
console.log(typeof id)

// there are some more type of datatype in js 
//primiitive datatype
let a = 100 
let b = a 
a = b - 10 
console.log(a,b)

//reference datatype

let arr = ["apple","banana","pinapple" ];
let arr1 = arr;
arr = ["apple", "mango"];
console.log(arr);
console.log(arr1);



//objects  

let user = {
    name:"yash",
    age:24,
    email:"yash@gmail.com",
    hobbies:['reading','teaching','playing']
}

console.log(user.name)
console.log(user.hobbies)

user.phone = '11223234';

//delete user.age
//in java script the arrat 

//excersise 

let list = [{name:'parikshit',age:19,email:"parikshit@gmail.com"},
            {name:'pretty',age:21,email:"pretty@gmail.com"},
            {name:'ayushi',age:18,email:"ayushi@gmail.com"},
            {name:'zatin',age:22,email:"zatin@gmail.com"},
            {name:'shivansh',age:16,email:"shiva@gmail.com"},
            {name:'arnima',age:23,email:"arnima@gmail.com"},
            {name:'sonu',age:19,email:"sonu@gmail.com"},
            {name:'tony',age:19,email:"tony@gmail.com"},
            {name:'priter',age:19,email:"pritter@gmail.com"},
            {name:'manjit',age:19,email:"manjit@gmail.com"},
        ]

console.log(list)
let random = Math.floor(Math.random()*100)   
// console.log(list[random].email)



//contional statement in js  
// condtional which perdeict the output based on the condition 

if(random>18){
    console.log(random+" yes the user the user is elegible for vote");
}
else if(random==18){
    console.log(random+" yes the user is eligible for vote");
}
else{
    console.log(random+" the user in not eligible for vote");
}








