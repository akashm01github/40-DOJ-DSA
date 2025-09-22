
// const names = ["Akash", "Bob", "Ram", "Devid","John"];


//! For Each 
// names.forEach(function(elem){
//     console.log(elem)
// });


//! MAP 
// let newarr = names.map(function(value){
//     return value + " Ji";
// })


// console.log(newarr)



//! FILTER 

// let newarr = names.filter(function(value){
//     if(value.startsWith("A")){
//         return true;
//     }
// });

// console.log(newarr);


//! destructureing


//!  Array destructureing

// let numbers = [10, 20, 30];

// let [a,b,c] = numbers;

// console.log(a)
// console.log(b)
// console.log(c)


//!  Object destructureing

// let person = {
//   name: "Akash",
//   age: 24,
//   city: "Kolkata"
// };


// let {name , age, city } = person;


// console.log(name)
// console.log(age)
// console.log(city)



// spread and rest 

function addNumber(a,b, ...others){
    console.log(a)
    console.log(b)
    // console.log(c)
    console.log(others)
}


addNumber(10, 20, 30, 40, 50);
