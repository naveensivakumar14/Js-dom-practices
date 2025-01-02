// Reverse array usinng length function
//-----------------------------------------------------------------------------
// function reverseNum(numBox) {
//     let output = [];
//     for (let i = numBox.length - 1; i >= 0; i--) {
//         output.push(numBox[i]);
//     }
//     return output;
// }

// let numBox = [12, 52, 34, 25, 18, 75];
// console.log(reverseNum(numBox)); // Output: [75, 18, 25, 34, 52, 12]

//Reverse Array
//---------------------------------------------------------------------------------------
// function findLen(num) {
//     let count = 0;

//     for (let a = 0; a < num.length; a++) {
//         count++;
//     }
//     return count;
// }

// function revArr(num) {
//     let count = findLen(num); // Get the length of the array
//     let output = [];
//     for (let i = count - 1; i >= 0; i--) {
//         output.push(num[i]);
//     }
//     return output;
// }

// let num = [1, 5, 7, 8, 6, 4];
// console.log(num)
// console.log(findLen(num)); // Output: 6
// console.log(revArr(num));  // Output: [4, 6, 8, 7, 5, 1]



// let numbers=[14,58,24,72,65]
// console.log(numbers.sort())



let fruit=["Grapes","Mango","Orange","PineApple","Guava","Apple"]
// console.log(fruit.length)

//Find index of element 
//-----------------------------------------------------------------------------------
//find pineapple index using for loop
// for(let i=0;i<fruit.length;i++){
//     if(fruit[i]=="PineApple"){
//         console.log(i)
//     }
// }
//find orange index using function
// function findOrange(item){
//     return item == "Orange"
// }
// let orangeIndex = fruit.findIndex(findOrange);
// console.log(`Index of Orange : ${orangeIndex}`)

// console.log(fruit.findIndex(item => item == "Orange"))

//anonymous function to find index of fruit 
// let x =fruit.findIndex(function(item,index){
//     if(item =="Apple"){
//        return index
//     }
// })
// console.log(x)




let age=[12,25,36,27,6,74]

// console.log("Maximum",Math.max(...age))
// console.log("Minimum",Math.min(...age))
let minAge=age[0]  //12
// let maxAge=age[0]  //12


for (let i=1;i<age.length;i++){
  
    //find min number
    if(age[i]<minAge){
        minAge=age[i]
       
    }
    
    //25<12  12 
    //36<12 12
    //27<12 12
    //6<12  6
    //74<6  74
}

console.log("Minmum age: ",minAge)

