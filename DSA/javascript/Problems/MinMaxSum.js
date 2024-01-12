function MinMaxSum(arr) {
    let minSum = Infinity;
    let maxSum = -Infinity;
    const totalSum = arr.reduce((a, b) => { return a + b });

    for(const num of arr) {
        let currentSum = totalSum - num;
        minSum = Math.min(minSum, currentSum);
        maxSum = Math.max(maxSum, currentSum);
    }

    console.log(minSum, maxSum);
}

MinMaxSum([5,5,5,5,5])