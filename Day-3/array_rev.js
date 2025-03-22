// Revese the Array
//Brute Force
let demoArr = [1,2, 3, 4, 5, 6];

let temp = new Array(demoArr.length);

let i = 0;

for (let j = demoArr.length - 1; j >= 0; j--) {
  temp[i] = demoArr[j];
  i++;
}

console.log(temp);

//Optimize Way (Two Pointer Algorithm)
let arr = [10, 20, 30, 40, 50, 60];

let k = 0,
  j = arr.length - 1;

while (k < j) {
  let temp = arr[k];

  arr[k] = arr[j];

  arr[j] = temp;

  k++;
  j--;
}

console.log(arr);