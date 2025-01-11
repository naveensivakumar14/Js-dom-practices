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

//Sort array without using SORT()
//----------------------------------------------------------------------------------


let age = [12, 25, 6, 56, 45, 34];

for (let i = 0; i < age.length; i++) {

    //i=0,1,2,3,4

    for (let j = 0; j < age.length - 1; j++) {
        if (age[j] > age[j + 1]) {
            // Swap the elements
            let temp = age[j];
            age[j] = age[j + 1];
            age[j + 1] = temp;
        }
    }
}

console.log("Sorted array:", age);




// let numbers=[14,58,24,72,65]



// console.log(numbers.sort())



// let fruit=["Grapes","Mango","Orange","PineApple","Guava","Apple"]
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


//find min and max in array
//--------------------------------------------------------------------------------




// let age=[12,25,36,27,6,74]

// // console.log("Maximum",Math.max(...age))
// // console.log("Minimum",Math.min(...age))
// let minAge=age[0]  //12
// // let maxAge=age[0]  //12


// for (let i=1;i<age.length;i++){
  
//     //find min number
//     if(age[i]<minAge){
//         minAge=age[i]
       
//     }
    
//     //25<12  12 
//     //36<12 12
//     //27<12 12
//     //6<12  6
//     //74<6  74

//     //find max number
// }

// console.log("Minmum age: ",minAge)


//maximum number of the given array
let arr=[22,15,28,46,59,34]
let maxNum=arr[0]

for (let i=0;i<arr.length;i++){
    //find max number in array
    if(arr[i]>maxNum){
        maxNum=arr[i]
    }
}
console.log(maxNum)

/* execution
22>22 f mn=22
15>22 f mn=22
28>22 t mn=28
46>28 t mn=46
59>46 t mn=59
34>59 f mn=59
*/


let arrMap=[25,35,65,41,87,12]

console.log(arrMap)
console.log(`Sorted array: ${arrMap.sort()}`)