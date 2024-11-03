
// let fruitsBasket= ["Apple", "Orange", "Grapes", "Pineapple", "Watermelon", "Papaya", "Banana", "Strawberry", "Mango"];
// fruitsBasket.map((fruit,index) => {
//     console.log(index+1,fruit);
// });
// fruitsBasket.forEach(fruitName => {
//     console.log(fruitName)
// });


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

