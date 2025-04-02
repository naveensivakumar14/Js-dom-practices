//Objects

let dinnerMenu={Mon:"Pongal",Tues:"Idlii",Wednes:"vegPulav",Thurs:"Dosa",Fri:"Upma"}
for (let day in dinnerMenu){
    console.log("Day: ",day,"   Food: ",dinnerMenu[day])
}
console.log(dinnerMenu)

//destructuring objects
var {Mon,Tues,Wednes,Thurs,Fri}=dinnerMenu
console.log(Mon,Fri)

//destructuring obejct
var students={
    student1:{name:"Aswin",age:22},
    student2:{name:"Murali",age:26},
}

console.log(students)
console.log(typeof(students))