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
  