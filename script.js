
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


//Higher Order functions



//callback function
function naveen(task){
    console.log("Hey Naveen")
     // Calling the callback function
    task()
}
 // Callback 
function task(){
     console.log("Cook Dinner")
}
naveen(task);

//ES6 Practice

