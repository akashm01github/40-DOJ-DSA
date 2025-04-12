//Frequency of a Character
let str = "hello";

let freqArr = new Array(123).fill(0);

for (let i = 0; i < str.length; i++) {
  let asci = str.charCodeAt(i);
  freqArr[asci] = freqArr[asci] + 1;
}

for (let i = 0; i < freqArr.length; i++) {
  if (freqArr[i] !== 0) {
    console.log(`${String.fromCharCode(i)} = ${freqArr[i]}`);
  }
}
