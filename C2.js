const age = 21;
if (age > 20)
    console.log("You can enter this room.")
else
    console.log("You can't enter this room.")

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;
console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);

console.log("----------------");

const age2 = 25;
const hasDriverLicense = true;
const hasCar = false;
let canDrive = false;

canDrive = age2 > 18 && hasDriverLicense ? true : false;
console.log(canDrive);

let canRentCar = false;
canRentCar = age2 >= 22 && hasDriverLicense && !hasCar ? true : false;
console.log(canRentCar);

let needDriver = false;
needDriver = age2 < 18 && !hasDriverLicense && !hasCar ? true : false;
console.log(needDriver);

console.log("----------------");

