// 🧠 First Letter Appeares Twise
let sentence = "abccbaazz";
let myMap = new Map();
for (let i = 0; i < sentence.length; i++) {
  let ch = sentence.charAt(i);
  if (myMap.has(ch)) {
    myMap.set(ch, myMap.get(ch) + 1);

    if (myMap.get(ch) == 2) {
      // return ch;
      console.log(ch);
      break;
    }
  } else {
    myMap.set(ch, 1);
  }
}