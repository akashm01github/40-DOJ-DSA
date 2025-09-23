//! Function Approach (Old Method)

// function Toofie(myFlavour,myPrice,toffieExpiry){
//     this.flavour = myFlavour;
//     this.price = myPrice;
//     this.expiry = toffieExpiry;
// }


// let t1 = new Toofie("Vanila",10,"23-05-2025");
// let t2 = new Toofie("Chocolate",30,"24-05-2025");


//!  Class Approach (Modern Way) 


// class Toffie {
//     constructor(flavour,color,taste,texture){
//         this.flavour = flavour;
//         this.color = color;
//         this.taste = taste;
//         this.texture = texture;
//     }
// }

// let t1 = new Toffie("Vanila","Brown","Sweet","Hard");
// let t2 = new Toffie("Chocolate","Yellow","Tasty","Soft");

// console.log(t1);
// console.log(t2);


function Toffie(toffieName,toffiePrice){
    this.name = toffieName;
    this.price = toffiePrice;
}

let t1 = new Toffie("alpenliebe",2);
let t2 = new Toffie("Dairy Milk",10);

