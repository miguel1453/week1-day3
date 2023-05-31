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

//Thomas
function fibonacci (num) {
    let prev = 0;
    let current = 1;
    let counter = 1;
    if(num != 0){
        console.log(current);
        while(counter < num) {
            let next = prev + current;
            console.log(next);
            prev = current;
            current = next;
            counter++;
        }
    }
}

console.log(fibbonaci10());
console.log(printFibonnacci());
fibonacci(10);
