// Miguel
const fibbonaci10 = () => {
    let nums = [0, 1];

    for (let i = 2; i < 10; i++) {
        let num = nums[i-1] + nums[i-2];
        nums.push(num);
    }
    return nums;
};

// Jacob
function printFibonnacci() {
    let x = 0, y = 1, z;
    for (let i = 0; i < 10; i++) {
        console.log(x);
        z = x + y;
        x = y;
        y = z;
    }
}


console.log(fibbonaci10());
console.log(printFibonnacci());
