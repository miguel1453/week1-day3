const fibbonaci10 = () => {
    let nums = [0, 1];

    for (let i = 2; i < 10; i++) {
        let num = nums[i-1] + nums[i-2];
        nums.push(num);
    }
    return nums;
};

console.log(fibbonaci10());