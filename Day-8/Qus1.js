//🧠 Two Sum

let arr = [11, 2, 5, 7, 43];
let target = 9;

let myMap = new Map();

let ans = [-1, -1];

for (let i = 0; i < arr.length; i++) {
  if (myMap.has(target - arr[i])) {
    ans[0] = i;
    ans[1] = myMap.get(target - arr[i]);
  } else {
    myMap.set(arr[i], i);
  }
}

console.log(ans);