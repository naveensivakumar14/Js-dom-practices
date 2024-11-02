

let fruitsBasket= ["Apple", "Orange", "Grapes", "Pineapple", "Watermelon", "Papaya", "Banana", "Strawberry", "Mango"];


//Printing array elements in different ways
//for loop
console.log("\nFor loop")
for(let i=0;i<fruitsBasket.length;i++){
    console.log(fruitsBasket[i])
}

//map function
console.log("\nMAP")
fruitsBasket.map((fruit) => {
    console.log(fruit);
});


//forEach loop
console.log("\nFor Each")
fruitsBasket.forEach(function(fruitName){
    console.log(fruitName)
});
