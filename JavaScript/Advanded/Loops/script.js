const basket = ['apple', 'oranges', 'bananas'];
const detailedBasket = {
    apples: 5,
    oranges: 9,
    bananas: 7
};


// iterating - arrays, strings
for (item of basket){ 
    console.log(item);
}
// getting the properties
// Enumerating over an object
for (item in detailedBasket){ 
    console.log(item)
}


