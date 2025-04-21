//This Way We Create Objects

var obj = {
  stdName: "Akash",
  age: 24,
  greet: function () {
    console.log(`Good Morning ${this.stdName}`);
  },
};

console.log(obj);

// Constractor Function

//👴 OLD METHOD BEFORE ES6

//⭐ যদি কখনো কোনো ফাংশনকে কল করার সময় `new` ব্যবহার করো,
// সঙ্গে সঙ্গে মনে মনে একটা খালি অবজেক্ট তৈরি করে নাও।

//⭐ এরপর, ফাংশনের ভিতরে যেখানে যেখানে `this` দেখা যাবে,
// সেখানে সেই খালি অবজেক্টটার কথাই মনে করে সেটিকে বসিয়ে দাও।

// function Toffie(flavor, price, expiry) {
//   this.flavor = flavor;
//   this.price = price;
//   this.expiry = expiry;
// }

// let toffie1 = new Toffie("Vanila", 20, "2023-12-5");
// let toffie2 = new Toffie("Chocolate", 30, "2023-9-5");
// let toffie3 = new Toffie("Stroberry", 15, "2023-07-5");

// console.log(toffie1);
// console.log(toffie2);
// console.log(toffie3);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

class Toffie {
    // 📝 প্রতিবার যখনই তুমি একটা class বানাও, তখনই যেটা সবার আগে বানাতে হয় — সেটা একটা অভ্যাসে পরিণত করে ফেলো। ওটার নাম হচ্ছে constructor।"
    constructor(flavor, price, expiry) {
      this.flavor = flavor;
      this.price = price;
      this.expiry = expiry;
    }
  }
  
  let toffie1 = new Toffie("Vanila", 20, "2023-12-5");
  let toffie2 = new Toffie("Chocolate", 30, "2023-9-5");
  let toffie3 = new Toffie("Stroberry", 15, "2023-07-5");
  
  console.log(toffie1);
  console.log(toffie2);
  console.log(toffie3);
  