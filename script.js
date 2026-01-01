
// Initialize an empty basket
const basket=[];

// Function to add items to the basket (function definition)
function addToBasket(item){
    basket.push(item);
    console.log(`${item} added to basket.$`);
}

// Adding items to the basket (function calls)
addToBasket (["Appple","wheat bread","milk","eggs","soya chunks"]);

// View basket items
function viewBasket(){
    console.log("Items in basket:");
    basket.forEach((item, index) => {
        
        console.log(`${index + 1}. ${item}`);
    }); 
}

viewBasket();      

