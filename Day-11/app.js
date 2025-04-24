//todo: OOPS Micro Project 
class Libray{
    constructor(){
        this.books  = [];
    }

    addBook(book){
        this.books.push(...book);
    }

    listAllBooks(){
        this.books.forEach(function(b,idx){
            console.log(`${idx+1}) ${b.name} by ${b.author}`);
        });
    }
}


// ! CLASS OF BOOK
class Book{
    constructor(name,isbn, price, author){
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStatus = false;
    }

    info(){
        console.log(`Name: ${this.name} , ISBN: ${this.isbn}, Price: ${this.price} Author: ${this.author} you have ${this.readStatus ? "read it" : "not Read this Book"}`);
    }

    changeReadStatus(){
        this.readStatus = !this.readStatus;
    }
}

let b1 = new Book("Pather Panchali",345612,250, "Bibhutibhushan Bandyopadhyay")
let b2 = new Book("Nonte Fonte",587221,400, "Narayan Debnath")
let b3 = new Book("Feluda Series",781245,180, "Satyajit Ray")





let library1 = new Libray();

library1.addBook([b1,b2,b3]);
