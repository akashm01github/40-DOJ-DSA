
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

// function addNumber(a,b, ...others){
//     console.log(a)
//     console.log(b)
    // console.log(c)
//     console.log(others)
// }


// addNumber(10, 20, 30, 40, 50);


//########################################################################

//! 🔹 forEach Practice

// let nums = [2, 4, 6, 8];

// nums.forEach(function(elem){
//     console.log(`Number is ${elem}`);
// })


// let names  =  ["Akash", "Aparna", "Papan", "Jharnna"];


// names.forEach(function(personName){
//     console.log(`Hello ${personName}`)
// })


//! map Practice

// let nums = [1, 2, 3, 4];

// let updatedNums = nums.map(function(number){
//     return number *2;
// })

// console.log(updatedNums)


// let fruits = ["apple", "banana", "mango"];

// let lengthofFruits = fruits.map(function(fruit){
//         return fruit.length;
// })

// console.log(lengthofFruits)


//! filter Practice


// let nums = [10, 15, 20, 25, 30];

// let evenNumbers = nums.filter(function(num){
//     return num % 2 == 0;
// })


// console.log(evenNumbers);


let animals = ["cat", "elephant", "dog", "tiger"];

let updatedAnimales = animals.filter(function(animal){
     return animal.length > 3 ;
})


console.log(updatedAnimales);