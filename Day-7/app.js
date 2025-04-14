
//🎯 MAP - DS
let myMap = new Map();

// BASICS MAP PROPERTY
// console.log(myMap);
// console.log(myMap.get("name"));
// console.log(myMap.has("name"));
// console.log(myMap.delete("name"));
// console.log(myMap.clear());
// console.log(myMap);

// myMap.set("std1", "Akash Mukherjee");
// myMap.set("std2", "Aparna Mukherjee");
// myMap.set("std3", "John Wick");

// TRAVERSE THE MAP

// for (let [key, val] of myMap) {
//   console.log(`Key = ${key} , Value = ${val}`);
// }

// FREQUENCY
let arr = [10, 15, 10, 2, 5, 7, 10, 15, 2, 7, 5, 5];

let map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
    // If the number already exists in the map, we get its        
    //  current value (count), add 1, and update it.
  } else {
    map.set(arr[i], 1);
    // If the number is not in the map, we add it and set          
    // its value as 1 (first occurrence).
  }
}

console.log(map);