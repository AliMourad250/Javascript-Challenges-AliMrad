let fiveNumbers = [1, 2, 3, 4, 5];
let personalInfo = {
    name: 'Ali',
    age: 21,
    height: '178 cm',
    location: 'Shouf',
    nationality: 'Lebanese',
};

let nextThreeNumbers = [6, 7, 8];
let allNumbers = [...fiveNumbers, ...nextThreeNumbers];
console.log(allNumbers);

console.log("----------------");

let [firstNum, secondNum, thirdNum] = fiveNumbers;
console.log(firstNum + " " + secondNum + " " + thirdNum);

let { name, location, nationality } = personalInfo;

console.log(name + " " + location + " " + nationality);

console.log("----------------");

