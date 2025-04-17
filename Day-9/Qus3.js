// 🧠 Check Power of 2 or Not
let num = 17;

if ((num & (num - 1)) == 0) {
  console.log("Power of 2");
} else {
  console.log("Not Power of 2");
}