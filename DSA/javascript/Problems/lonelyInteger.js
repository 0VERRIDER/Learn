function lonelyInteger(arr) {
    const sortedArr = arr.sort((a,b)=> {a-b});
    let lonelyIntegers = [];
    for(const num of sortedArr) {
        if(sortedArr.filter((a => a === num)).length === 1) {
            lonelyIntegers.push(num);
        }
    }

    return lonelyIntegers;
}

console.log(lonelyInteger([1,2,3,4,5]))