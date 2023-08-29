console.log('I am linked now!!');
let name;
name = "Ali";
// alert(name);

console.log("----------------");

let age = 21;
var lastName = "Mrad";
const DOB = "07/07/2002";



console.log(age + ", " + lastName + ", " + DOB);

console.log("----------------");

console.log(typeof ("this is a text"));
console.log(typeof (true));
console.log(typeof (false));
console.log(typeof (1215));
console.log(typeof ("999"));
console.log(typeof ({}));
console.log(typeof ([]));
console.log(typeof (null));
console.log(typeof (undefined));

let v1 = "what time is it?",
    v2 = true,
    v3 = 8,
    v4 = [21, 22, 23, 2222],
    v5 = {
        "food": "burger",
        "drink": ["water", "juice"]
    },
    v6 = 'c';

console.log(v1 + ": " + typeof (v1));
console.log(v2 + ": " + typeof (v2));
console.log(v3 + ": " + typeof (v3));
console.log(v4 + ": " + typeof (v4));
console.log(v5 + ": " + typeof (v5));
console.log(v6 + ": " + typeof (v6));

console.log("----------------");

const nb = 2;
let myText = "This is my text!",
    myText2 = 'This is my ${nb}nd text!',
    mytext3 = `This is my ${nb + 1}rd text!`;

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote =
    'This is my text using single quotations ${counter} times';
const doubleQuote =
    'This is my text using double quotations ${counter} times';
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

console.log(counter);
console.log(backtick);
console.log(singleQuote);
console.log(doubleQuote);
console.log(tryThisAlso);
console.log("Explanation: \nIn the 4 declaration above," +
    "\nwe intended to use the interpolation in each way of string declaration," +
    "\nbut as we noticed, it only worked with the backticks \`\` when we tried to log the variable \"counter\"\'s value, \nand it also worked when we tried putting an addition operation inside the interpolation.");

console.log("----------------");

const part1 = "I lo", part2 = "ve coding!";
const result = part1 + part2;
console.log(result);

console.log("----------------");

console.log(2 === "2");
console.log("2" === "2");
console.log(2 !== "2");
console.log("2" !== "2");
console.log(2 == "2");
console.log("2" == "2");
console.log(2 != "2");
console.log("2" != "2");

console.log("")

console.log(2 > "2");
console.log("2" > "2");
console.log(2 >= "2");
console.log("2" >= "2");
console.log(2 < "2");
console.log("2" < "2");
console.log(2 <= "2");
console.log("2" <= "2");

console.log("----------------");

const result0 = 5 + 3 * 2; // 11
console.log(result0);

const result1 = 10 / 2 + 3; // 8
console.log(result1);

const result2 = 10 / (2 + 3); // 2
// here the difference is that we used the () which has the highest priority.
console.log(result2);

