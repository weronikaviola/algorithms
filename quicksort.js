//quicksort in JS

//this one is the worst case scenario, as it runs in O(n2)
function quicksort(anArray) {
    if (anArray.length < 2) return anArray;
    else {
        let pivot = anArray[0];
        let smaller = [];
        let greater = [];
        for (let i = 1; i < anArray.length; i++){
            if (anArray[i] < pivot) smaller.push(anArray[i]);
            else greater.push(anArray[i]);
        }
        return quicksort(smaller).concat([pivot], quicksort(greater));
    }
}

// console.log(quicksort([1,2,5,4,1,2]));
// console.log(quicksort([1,2]));
// console.log(quicksort([1]));

//this version takes a mid argument as pivot and runs in O(nlogn)
function quicksortTwo(anArray) {
    if (anArray.length < 2) return anArray;
    else {
        let pivot = anArray.splice(Math.round(anArray.length/2), 1);
        let smaller = [];
        let bigger = [];
        for (let i = 0; i < anArray.length; i++){
            if (anArray[i] < pivot[0]) smaller.push(anArray[i]);
            else bigger.push(anArray[i])
        }
        return quicksortTwo(smaller).concat(pivot, quicksortTwo(bigger));
    }
}

console.log(quicksortTwo([1,6,3,6,8,10]));