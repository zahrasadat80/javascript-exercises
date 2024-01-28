const removeFromArray = function(arr,deleteItem) {
    let indexOfDeletedItem = arr.indexOf(deleteItem);
    arr.splice(indexOfDeletedItem,1);
    return arr; 
};



// Do not edit below this line
module.exports = removeFromArray;
