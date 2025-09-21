//! For Each Loop  ✅
//! JSON data to Frontend 
//! Event Bubbling 
//! Local Storage Manage 


//###########################################################

// let arr = [10,15,20,25];

// arr.forEach((elem)=>{
//     console.log(elem);
// })


// let users = [
//     {
//         userName: "Akash",
//         age:24
//     },
//     {
//         userName: "Aparna",
//         age:38
//     },
//     {
//         userName: "Raju",
//         age:42
//     }
// ]


// let sum = 0;

// users.forEach(function(elem){
//     sum = sum + elem.age
//     console.log(sum)
// })

// console.log(sum)
//###########################################################

let body = document.querySelector('body');


let users = [
    {
        userName: "Akash Mukherjee",
        age: 24,
        city: "Kolkata",
        isFrined: "Stranger",
        image: "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        userName: "Riya Sharma",
        age: 22,
        city: "Delhi",
        isFrined: "Stranger",
        image: "https://media.istockphoto.com/id/1389898350/photo/young-adult-dark-skinned-man-cute-iconic-character-guy-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=FlHLKW5FImxS1u8Xyfh_qpa8bC5v4jiR7K2B_2BRU3c="
    },
    {
        userName: "Arjun Patel",
        age: 27,
        city: "Ahmedabad",
        isFrined: "Stranger",
        image: "https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        userName: "Sneha Das",
        age: 25,
        city: "Bangalore",
        isFrined: "Stranger",
        image: "https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        userName: "Rohit Verma",
        age: 29,
        city: "Mumbai",
        isFrined: "Stranger",
        image: "https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];



function heroFunction() {
    let sum = '';

    users.forEach(function (elem, idx) {
        sum = sum + `
    <div class="card">
        <img src=${elem.image} alt="">
        <h1>${elem.userName}</h1>
        <h5>Age: ${elem.age}</h5>
        <h6>City: ${elem.city}</h6>
        <h4>${elem.isFrined}</h4>
        <button id=${idx}>Add Friend</button>
    </div>
    `

        body.innerHTML = sum;
    })
}


heroFunction();



body.addEventListener("click", function (dets) {
    let gold = users[dets.target.id];

    if(gold.isFrined == "Stranger"){
        gold.isFrined = "Frined";
    }
    else{
        gold.isFrined = "Stranger"
    }
    
    heroFunction();
})


