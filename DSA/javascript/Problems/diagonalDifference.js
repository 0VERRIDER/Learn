function getDiagonals(arr) {
    // 00 01 02
    // 10 11 12
    // 20 21 22
    let primaryDiagonalElements = [];
    let secondaryDiagonalElements  = []
    let n = arr.length;

    for(let i = 0; i<n; ++i) {
        for(let j = 0; j<n; ++j) {
            if(i == j) {
                primaryDiagonalElements.push(arr[i][j]);
            }
            
            if( (i + j) == (n - 1)) {
                secondaryDiagonalElements.push(arr[i][j])
            }
        }
    }

    return [primaryDiagonalElements, secondaryDiagonalElements]
}

function diagonalDifference(arr) {
    let [primaryDiagonalElements, secondaryDiagonalElements] = getDiagonals(arr);
    let primaryDiagonalSum = primaryDiagonalElements.reduce((a,b)=>{return a+b},0);
    let secondaryDiagonalSum = secondaryDiagonalElements.reduce((a,b)=>{return a+b},0);
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

console.log(
    diagonalDifference([
    [1,2,3],
    [4,5,6],
    [7,8,9]
])
)