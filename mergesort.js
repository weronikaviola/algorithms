//merge sort algorythm
//divide array in halves until it cannot be further divided
//if one item --> return
//else get mid number, greate left and right part
//return merge(mergesort(l), mergesort(r))

function mergeSort(anArray){
    if(anArray.length < 2) return anArray;
    else {
        let mid = Math.floor(anArray.length / 2);
        let left = anArray.slice(0, mid);
        let right = anArray.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
    } 
}

function merge(left, right) {
    let result = [];
    let idxR = 0;
    let idxL = 0;
    while (idxL < left.length && idxR < right.length){
        if(left[idxL] < right[idxR]){
            result.push(left[idxL]);
            idxL++;
        } else {
            result.push(right[idxR]);
            idxR++;
        }
    }
    return result.concat(left.slice(idxL)).concat(right.slice(idxR));
}

console.log(mergeSort([3,2,5,9,1,0]));
console.log(mergeSort([1,1,1,2,4]));