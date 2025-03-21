
// let fruitsBasket= ["Apple", "Orange", "Grapes", "Pineapple", "Watermelon", "Papaya", "Banana", "Strawberry", "Mango"];
// fruitsBasket.map((fruit,index) => {
//     console.log(index+1,fruit);
// });
// fruitsBasket.forEach(fruitName => {
//     console.log(fruitName)
// });



//25.1 - JS Array methods 


//ForEach method
console.log("\nFor Each")
let fruits=["Orange","Apple","Grapes"]
fruits.forEach(function(fruit,index){
    

    console.log(fruit)
    
    if(fruit=="Apple"){
        console.log(index)
    }
    
})



//Filter function
console.log("\nFilter Function")
let numbers=[25,17,34,62,59,90,1]

var above50=numbers.filter(function(value){
    if(value>50){
        return true
    }
    else{
        return false
    }
})

console.log(above50)



//Map function
console.log("\nMap Function")


var biscuits=["GoodDay","Orea","MarieGold","Hide & Seek","Unibic"]
biscuits.map(function(item){
    console.log(item)
})


console.log("\nMap function with variable")
var colors=["Red","Black","Green","Orange","Yellow","Blue"]
var selectedColors=colors.map(function(color){
    if(color=="Black"){
        console.log("Your",color,"color shirt is available")
       
    }
})
selectedColors


