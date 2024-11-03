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
console.log("Callback function")
function partner(){
    console.log("Swathi")
}
function greet(partener){
    console.log("My partner is");
    partner()
    
}
greet(partner)


//IIFE
(function() {
    console.log("This function runs immediately!");
  })();
