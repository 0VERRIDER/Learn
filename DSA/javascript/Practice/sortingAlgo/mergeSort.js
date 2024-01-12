function merge(left, right) {
    if(left[0]>right[0]) {
        
    }
}

function mergeSort(arr) {
    if(arr.length < 2) return arr
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    console.log("left:", left)
    console.log("right:", right)
    return left.concat(right);
}

console.log(mergeSort([1,2,3,7,3]))