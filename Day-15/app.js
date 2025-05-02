//! Task:

// 1. Create getUser() - resolves with { id: 1, name: "Harsh" }
// 2. getPosts(userId) - resolves with list of post titles

// 3. getComments(postId) -» resolves with comments
// Chain them together using .then() and log the final output.

function getUser(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res({ id: 1, name: "Akash" });
        },1000)
    })
}


function getPosts(userId){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(["Title 1", "Title 2"]);
        },2000)
    })
}


function getComments(postId){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(["Great Post", "Nice Working", "You Rocked"]);
        },2000)
    })
}


getUser().then((data)=>{
    console.log(data);
    return getPosts(data.id);
})
.then(function(titles){
    console.log(titles);
    return getComments("asasasas");
})
.then(function(cmts){
    console.log(cmts);
})
.finally(function(){
    console.log("✅ All Data Fetched");
})
