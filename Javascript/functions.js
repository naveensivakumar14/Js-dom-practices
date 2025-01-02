//JavaScript Functions

//Normal functions

//no arguments no return values
function movie(){
  console.log("Amaran \nSeat H12 \n150 INR")
}
movie()

//with arguments no return values
function movie(title){
    console.log(title)
}
movie("Amaran")

//with arguments with return values
function movie(title){
    return(title)
}
var show= movie("Amaran")
console.log(show)
console.log(movie("Brother"))

//no arguments with return valuess
function movie(){
    return "Blody Begger"
}
console.log(movie())




//ES6 Functions


//Named functions
console.log("Named function")
function add(a,b){
    console.log(a+b)
}
add(2,4)

//Anonymous functions
console.log("\nAnonymous function")
const vote = function(age) {
    console.log(age >= 18 ? "Eligible to Vote" : "Underage");
};
vote(20)
vote(12)

//Arrow functions 
console.log("\nArrow function")
var greeting=(guest)=>{
    console.log("Welcome ",guest);
}
greeting("Arjun")

//Callback function

function Cart(bill){
    console.log("Laptop bag - DELL")
    bill()
}
function bill(){
    console.log("1620 Rs");
}
Cart(bill)


//Callback example -2

// Define a function that takes a callback
function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    // Call the callback function
    callback();
}

// Define the callback function
function showWelcomeMessage() {
    console.log("Welcome to our learning platform!");
}

// Call the main function and pass the callback
greetUser("Alice", showWelcomeMessage);







//IIFE
// (function() {
//     console.log("This function runs immediately!");
//   })();
