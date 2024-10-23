
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

<<<<<<< HEAD
//Hello Ajay



// Higher Order Functions or Call back function
=======
// Higher Order Functions or callback function
>>>>>>> 535640a6f56fad881ae90b86d21d8ba539e64d7a
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

