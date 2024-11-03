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

//no arguments with return values
function movie(){
    return "Blody Begger"
}

console.log(movie())
