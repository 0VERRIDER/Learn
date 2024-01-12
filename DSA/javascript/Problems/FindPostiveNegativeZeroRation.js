function findRatio(arr) {
    const arr_length = arr.length;
    const arr_possibilities = [1,-1,0];
    arr_possibilities.forEach(possibility => {
            const occurrances = arr.filter(each_integer => Math.sign(each_integer) === possibility).length;
            const ratio = (occurrances/arr_length).toFixed(6);
            console.log(ratio);
    })
}

findRatio([1,-2,3])
