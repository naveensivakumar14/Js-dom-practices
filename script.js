//swap variables a and b

let a=10
let b=20

//using third variable
c=a
a=b
b=c
console.log("Using third variable")
console.log("a=",a)
console.log("b=",b)


//not using third variable


a=a+b //10+20=30
b=a-b //30-20=10       
a=a-b //30-10=20      
console.log("Not using third variable")
console.log("a=",a)
console.log("b=",b)

