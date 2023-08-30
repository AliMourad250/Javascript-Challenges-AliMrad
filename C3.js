function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log("addNumbers(7, 4): " + addNumbers(7, 4));

function findMax(num1, num2) {
    if (num1 > num2)
        return num1;

    else if (num2 > num1)
        return num2;

    else
        return "Both are equal";
}
console.log("findMax(7, 15): " + findMax(7, 15));

function compute(num1, num2, operation) {
    function arithmetic() {
        if (operation === "add")
            return num1 + num2;
        else if (operation === "subtract")
            return num1 - num2;
        else if (operation === "multiply")
            return num1 * num2;
        else if (operation === "divide")
            return num1 / num2;
    }
    return arithmetic();
}

console.log("compute(10, 2, \"subtract\"): " + compute(10, 2, "subtract"))

console.log("----------------");

const squareNumber = (number) => {
    // const localVar = 7;
    return number * number;
};
console.log("squareNumber(3): " + squareNumber(3));

let globalVar = 5;
console.log("squareNumber(globalVar): " + squareNumber(globalVar));

// console.log("localVar= " + localVar);

console.log("----------------");

console.log("for loop: ");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("");

console.log("while loop: ")

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

console.log("");

console.log("do-while loop: ")

let j = 1;
do {
    if (j % 2 === 0)
        console.log(j);
    j++;
} while (j <= 10);

console.log("");

let favFruits = ["apple", "orange", "banana", "peach"];

for (let i = 0; i < favFruits.length; i++) {
    if (favFruits[i].length > 5)
        console.log(favFruits[i]);
};

console.log("----------------");

function doubler(num) {
    return num = num * 2;
}

function processArray(nums, fn) {
    return nums.map((num) => Number(fn(num)));
}

console.log("processArray([1, 2, 3, 4], doubler): " + processArray([1, 2, 3, 4], doubler));


function multiplier(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

console.log(multiplier(2)(5));