//recursive function to count the number of items in a list

function recursiveCount(anArray) {
    if (anArray.length === 0) return 0;
    else {
        return 1 + recursiveCount(anArray.slice(1));
    }
}

console.log(recursiveCount([1,2,3,4,5,6,7,8]));
console.log(recursiveCount([]));
console.log(recursiveCount([1]));