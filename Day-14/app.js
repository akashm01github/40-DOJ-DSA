// function getDetails(userName,cb){
//     setTimeout(function(){
//         console.log("Sending the request to.....");
        
//     },1000);

//     setTimeout(function(){
//         console.log("Fetching the request to.....");
        
//     },3000);

//     setTimeout(function(){
        // Data
//         cb();
        
//     },6000);

// }

// getDetails("Akash",function(){
//         console.log("Data Saved in Galary.");
        
// })



// function doSomething(cb){
//     cb();
// }

// doSomething(function(){

// })

// ! Call Backs Hell

// function stepOne(cb){
//     console.log("Step-1");
//     cb();
// }

// function stepTwo(cb){
//     console.log("Step-2");
//     cb();
// }


// function stepThree(cb){
//     console.log("Step-3");
//     cb();
// }


// ! Call Backs Hell
// stepOne(function(){
//     stepTwo(()=>{
//         stepThree(()=>{
//             console.log("All Steps Done");
            
//         })
//     })
// })


// todo: PROMISES IN JS

// let pr = new Promise(function(res, rej){
//     console.log("Instagram Jao Data Lao");
//     console.log("Instagram  Data Collect ho raha hey");
//     console.log("Instagram  Data Collect mey Error Aya");
//     console.log("Instagram  Data Collect mey Error nahi Aya");
//     res();
// })

// pr.then(function(){
//     console.log("Resolved");
    
// }).catch(function(){
//     console.log("Rejected");
// })


//! How to Use Promise instande of Call back Hell
function stepOne(){
    return new Promise(function(res, rej){
        console.log("Step-1");
        res();
    });
}

function stepTwo(){
    return new Promise(function(res, rej){
        console.log("Step-2");
        res();
    });
}


function stepThree(){
    return new Promise(function(res, rej){
        console.log("Step-3");
        res();
    });
}

stepOne()
.then(stepTwo)
.then(stepThree).then(()=>{
    console.log("All Done");
    
})

