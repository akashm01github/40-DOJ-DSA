//Initializing an Array
// let arr = ["apple", "banana", "chery"];

// console.log(arr[0]);
///////////////////////////////////////////////////////
//What all can array store?

// let person = {
//   userName: "Akash",
//   age: 25,
// };

// let arr = ["apple", "banana", "chery", person];

// console.log(arr[3].userName);
//////////////////////////////////////////////////////
//Array Length Propety
// console.log(arr.length);

//////////////////////////////////////////////////////
//Add and Remove Elemt
// let arr = ["apple", "banana", "chery"];
// arr.push("Orange");
// console.log(arr);

// arr.pop();

// console.log(arr);

//Shift -> Remove the Element From the top
// arr.shift();
// console.log(arr);

//Unshift -> Add element on the TOP
// arr.unshift("Akash");
// console.log(arr);

/////////////////////////////////////////////////

//Looping on Array
// let myArr = [1, 2, 3, 4, 5, 6];
//For Loop
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

//While Loop
// console.log("While Loop");
// let j = 0;
// while (j < myArr.length) {
//   console.log(myArr[j]);
//   j++;
// }

// MAP
// let myArr = [1, 2, 3, 4, 5, 6];
// const ans = myArr.map((item, index, arr) => {
//   return item + 5;
// });

// console.log(ans);

//filter
// const myAns = myArr.filter((item, index, arr) => {
//   return item > 3;
// });

// console.log(myAns);

// REDUCE

// let myArr = [10, 20, 100, 4, 5];
// const ans3 = myArr.reduce(function (previous, item) {
//   return previous > item ? previous : item;
// });

// console.log(ans3);

// Some
let demoArr = [10, 20, 100, 4, 5];
let resultDemo = myArr.some(function (item, index) {
  return item > 3;
});

console.log(resultDemo);

//Every
let myArr1 = [10, 20, 100, 4, 1];
let result = myArr1.every(function (item, index) {
  return item > 3;
});

console.log(result);

// More Array Method

// Concat
let myArr2 = [10, 20, 100, 4, 1];

let names = ["Akash", "Aritra", "Abhik"];

let newArr = myArr2.concat(names);

console.log(newArr);

//Slice

let fruites1 = ["Apple", "Orange", "Litchi", "Banana"];

console.log(fruites1.slice(0, 2));
console.log(fruites1.slice(-2));

//SPLICE
let fruites2 = ["Apple", "Orange", "Litchi", "Banana"];

console.log(fruites2.splice(1, 2, "Mango"));

console.log(fruites2);

// FILL
let dummy = [1, 2, 3, 4, 5];
dummy.fill("Akash", 3);

console.log(dummy);

////////////////////////////////////////////

// Q.1 Scoend Largest Number
let arr = [10, 10];
function scondLargest(arr) {
  const uniqueArray = Array.from(new Set(arr));

  uniqueArray.sort((a, b) => {
    return b - a;
  });

  if (uniqueArray.length >= 2) {
    return uniqueArray[1];
  } else {
    return -1;
  }
  console.log(uniqueArray);
}

let ans = scondLargest(arr);

console.log(ans);

//Optimized Way
let myArr = [4, 4, 5,7];

function scondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;

  let scoendLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      scoendLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > scoendLargest) {
      scoendLargest = arr[i];
    }
  }
  return scoendLargest;
}

console.log(scondLargest(myArr));
