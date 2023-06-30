function isBigger(num) {
    if (num > 5) {
        return true;
    }
    else {
        return false;
    }
}
// } syntax error
const result = isBigger(6);
// console.log(result);

// const sum = a,b => a + b;

const sum = (a,b) => a + b;
const res = sum(3,5);

const musk = {
    name: 'Elon',
    age: 53,
    job: 'tesla'
}

console.log(musk.age);