//! Second max element from array

let myArr = [20, 30, 30, 40];

let large = Math.max(myArr[0], myArr[1]);

let scoendLarge = Math.min(myArr[0], myArr[1]);

for (let i = 2; i < myArr.length; i++) {
  if (myArr[i] > large) {
    scoendLarge = large;

    large = myArr[i];
  } else if (myArr[i] > scoendLarge && myArr[i] !== large) {
    scoendLarge = myArr[i];
  }
}

console.log(scoendLarge);