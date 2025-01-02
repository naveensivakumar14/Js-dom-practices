

let fruitsBasket= ["Apple", "Orange", "Grapes", "Pineapple", "Watermelon", "Papaya", "Banana", "Strawberry", "Mango"];
let prices=[180,100,120,80,60,50,50,220,140]

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


let users=["Arjun","Balaji","Dinesh","Karthi","Naveen"]

//arrow function
users.forEach((user)=>{
    console.log(user)
})

//array methods in javacript


