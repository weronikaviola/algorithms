// recursive max of a list

function recursiveMax(anArray) {
    if (anArray.length === 0 ) return null;
    else if (anArray.length === 1 ) return anArray[0];
    else if (anArray.length === 2){
        return (anArray[0] > anArray[1]) ? anArray[0] : anArray[1];
    }
    else {
        let temp_max = recursiveMax(anArray.slice(1));
        return (anArray[0] > temp_max) ? anArray[0] : temp_max;
    }
}

console.log(recursiveMax([1,2,3,5,3,2]));
console.log(recursiveMax([1,2]));
console.log(recursiveMax([0]));
console.log(recursiveMax([]));