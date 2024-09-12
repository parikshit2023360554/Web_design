// // function 

// function name(){
//     console.log("i am in function")
// }

// name();


// //add two number using function 

// function add(n,s){
//     return n+s;
// }

// total = add(6,2);
// console.log(total)


// //uisng arraow funciotn 
// add1=(a,b)=>{
//     return a+b
// }

// o=add1(11,12);
// console.log(o)


// //in different form 

// add1=(f,m)=>f+m;
// console.log(add(3,6));


// //loop 

// for(let i =0 ; i<=5;i++){
//     console.log(i);
// }

// //array 

// arr = [1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]*arr[i]);
// }


//map function 

// arr = [1,2,3,4,5,6];
// sqr = arr.map(function(n){
//     return n*n;
// })
// console.log(sqr)

//map in different form 

// arr = [1,2,3,4,5,6]
// srq = arr.map((n)=>n*n)
// console.log(srq)

//filter 

// arr = [10,20,30,40,50,60]
// let get = arr.filter((n)=>n>30)
// console.log(get)

//example 

// arr = [1,2,3,4,5,6]
// let get = arr.filter((n)=>n%2==0)
// console.log(get)


let list = [
    {name:'parikshit',age:19,email:"parikshit@gmail.com",salary:20000,gender:"male"},
    {name:'pretty',age:21,email:"pretty@gmail.com",salary:40000,gender:"female"},
    {name:'ayushi',age:18,email:"ayushi@gmail.com",salary:80000,gender:"female"},
    {name:'zatin',age:22,email:"zatin@gmail.com",salary:120000,gender:"male"},
    {name:'shivansh',age:16,email:"shiva@gmail.com",salary:60000,gender:"male"},
    {name:'arnima',age:23,email:"arnima@gmail.com",salary:70000,gender:"female"},
    {name:'sonu',age:19,email:"sonu@gmail.com",salary:220000,gender:"male"},
    {name:'tony',age:19,email:"tony@gmail.com",salary:245000,gender:"male"},
    {name:'priter',age:19,email:"pritter@gmail.com",salary:230000,gender:"male"},
    {name:'manjit',age:19,email:"manjit@gmail.com",salary:5000000,gender:"female"},
] 

// let name = list.map((n)=>n.name)
// console.log(name)

// let data = list.filter(n=>n.salary>20000)
// console.log(data)

// let email = list.map(user=>user.email)
// console.log(email)

//chanaling 
//combination of two or more function or combination of map and filter 

// //filter with map 
// let name = list.filter(user=>user.gender == "male").map(user=>user.name)
// console.log(name)


// //filter to filter 

// let email = list.filter(user=>user.gender == "female").filter(user=>user.salary<=80000).map(user=>user.age)
// console.log(email)



