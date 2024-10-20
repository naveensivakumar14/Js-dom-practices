// //Named function
function greeting(){
    console.log("Good morning")
}
greeting()

//Functions with expression
var msg=function(){
    console.log("Today is Holiday");
}
msg()


//anonymous function
console.log("setTimeout function wait for 2s")
setTimeout(function() {
    console.log('This is an anonymous function');
  }, 2000);
  

//anonymous function
var role="Full Stack Developer"
var job=function(){
    console.log(role);
}
console.log(job) //[Function: job]
job() //Full Stack Developer
