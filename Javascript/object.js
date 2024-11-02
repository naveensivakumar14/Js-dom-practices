//Objects

let dinnerMenu={Mon:"Brinjii",Tues:"Idlii",Wednes:"Pulav",Thurs:"Dosa",Fri:"Upma"}
for (let day in dinnerMenu){
    console.log("Day: ",day,"   Food: ",dinnerMenu[day])
}
console.log(dinnerMenu)

//destructuring objects
var {Mon,Tues,Wednes,Thurs,Fri}=dinnerMenu
console.log(Mon,Fri)

//destructuring obejct
var person={name:"Sanjay",age:22,name:"Aswin",age:26}
var {name,name}=person
var {age,age}=person

console.log(name)
console.log(age)
