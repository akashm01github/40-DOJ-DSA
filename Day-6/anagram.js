// Anagram
let s1 = "car";
let s2 = "arc";

let freqArr = new Array(123).fill(0);
let isAnagram = true;
for (let i = 0; i < s1.length; i++) {
  let asci = s1.charCodeAt(i);
  freqArr[asci] = freqArr[asci] + 1;
}

for (let i = 0; i < s2.length; i++) {
  let asci = s2.charCodeAt(i);
  freqArr[asci] = freqArr[asci] - 1;
}

for (let i = 0; i < freqArr.length; i++) {
  if (freqArr[i] !== 0) {
    isAnagram = false;
    break;
  }
}

if (isAnagram) {
  console.log(true);
} else {
  console.log(false);
}