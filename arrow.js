function makeDouble(num) {
    return num * 2;
}

const makeDouble2 = function myFunc(num) {
    return num * 2;
}

const makeDouble3 = num => num * 2;
const makeDouble4 = (num1, num2) => num1 + num2;
const makeDouble5 = (num1, num2) => {
    console.log('This is 5 number double it function');
    return num1 * num2;
}

const resutl = makeDouble(10);
const resutl2 = makeDouble2(20);
const result3 = makeDouble3(30);
const result4 = makeDouble4(40, 40);  
const result5 = makeDouble5(12, 14); 

console.log(resutl);
console.log(resutl2);
console.log(result3);
console.log(result4);
console.log(result5);