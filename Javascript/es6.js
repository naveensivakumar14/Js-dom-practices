/*
arrow functions
callback 
destructure
class and objects
*/





// let players=["Virat","Rohit","Ashwin"]


//anonymous function
// let match=function(players){
//     console.log(players)
// }
// match(players)


// //arrow function
// var msg=(name)=>{
//     console.log("Welcome ",name)
// }
// msg("Rajini")

// for(i=0;i<players.length;i++){
//     console.log(players[i])
// }

// players.forEach((player)=>{
//     console.log(player)
// })


//Destructure

// let user={
//     name:"Ajay",
//     age: 25,
//     gender: "male"
// }
// console.log(user)
// var {name,age,gender}=user
// console.log(name)
// console.log(age)
// console.log(gender)


// class and objects
class drink{
    constructor (name,price){
        this.name=name
        this.price=price
    }
}

let drink1=new drink("mint",60)
let drink2= new drink("oreoShake",80)
console.log(drink1)
console.log(typeof(drink))
console.log(typeof(drink1))
console.log(drink2)
console.log(drink2.name)

let age=[12,18,35,27,90]

age.map((item)=>{
    console.log(item)
})