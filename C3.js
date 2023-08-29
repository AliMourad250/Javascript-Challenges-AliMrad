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


