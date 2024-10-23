
// Anonymous function (nameless function)
var exam=function(subject){
    return subject
}
console.log(movie("Maths"));

// Arrow function 
var greet=(user)=>{
    console.log("Welcome",user)
}
console.log(user("Vijay"))


// Immediately Invoked function Expression 
(function userLogin(userName){
    console.log(`Hello ${userName}`);
}("Ajay"))

//Hello Ajay



// Higher Order Functions or Call back function
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

