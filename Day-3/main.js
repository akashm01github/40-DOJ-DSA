// ! Array Practice Question 
// Second max element from array

// let myArr = [20, 30, 30, 40];

// let large = Math.max(myArr[0], myArr[1]);

// let scoendLarge = Math.min(myArr[0], myArr[1]);

// for (let i = 2; i < myArr.length; i++) {
//   if (myArr[i] > large) {
//     scoendLarge = large;

//     large = myArr[i];
//   } else if (myArr[i] > scoendLarge && myArr[i] !== large) {
//     scoendLarge = myArr[i];
//   }
// }

// console.log(scoendLarge);

//////////////////////////////////////////////////////////////////

// Revese the Array
//Brute Force
// let demoArr = [1,2, 3, 4, 5, 6];

// let temp = new Array(demoArr.length);

// let i = 0;

// for (let j = demoArr.length - 1; j >= 0; j--) {
//   temp[i] = demoArr[j];
//   i++;
// }

// console.log(temp);

//Optimize Way (Two Pointer Algorithm)
// let arr = [10, 20, 30, 40, 50, 60];

// let i = 0,
//   j = arr.length - 1;

// while (i < j) {
//   let temp = arr[i];

//   arr[i] = arr[j];

//   arr[j] = temp;

//   i++;
//   j--;
// }

// console.log(arr);

/////////////////////////////////////////////////////////

// All zeroes to left and all ones to right

// let arr = [1, 0, 1, 0, 1, 0, 1, 0, 0, 1];

// let i = 0,
//   j = 0;

// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];

//     arr[i] = arr[j];

//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr);

///////////////////////////////////////////////////

//  Array left Rotation by 1

// let arr = [1, 2, 3, 4, 5];

// let temp = arr[0];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }

// arr[arr.length - 1] = temp;

// console.log(arr);

//////////////////////////////////////////////////

// Array Right Rotation by 1

// let arr = [1, 2, 3, 4, 5];

// let temp = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }

// arr[0] = temp;

// console.log(arr);


/////////////////////////////////////////////////
