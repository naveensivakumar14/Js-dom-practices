
// Anonymous function (nameless function)
var movie=function(movieName){
    return movieName
}
console.log(movie("Vikram"));

// Arrow function 
var greet=(user)=>{
    console.log("Welcome",user)
}
console.log(user("Hitesh"))

// Immediately Invoked function Expression 
(function userLogin(userName){
    console.log(`Hello ${userName}`);
}("Ajay"))

// Higher Order Functions 


function naveen(task){
     // Performing some operations
    console.log("Hey Naveen")
     // Calling the callback function
    task()
}
 // Callback function to be passed to the higher order function
function task(){
     console.log("Cook Dinner")
}

// Calling the higher order function with the callback function as argument
naveen(task);

