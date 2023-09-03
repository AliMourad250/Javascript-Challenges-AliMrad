let fiveNumbers = [1, 2, 3, 4, 5];
let personalInfo = {
    name: 'Ali',
    age: 21,
    height: '178 cm',
    location: 'Shouf',
    nationality: 'Lebanese',
    contactInfo: {
        email: 'myEmail@gmail.com',
        phoneNo: '71559162',
    }
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

let { email, phoneNo } = personalInfo.contactInfo;
console.log(email + " " + phoneNo);

let [first, second, ...restOfNumbers] = fiveNumbers;
console.log("first= " + first);
console.log("second= " + second);
console.log("restOfNumbers= " + restOfNumbers);

const PersInf = {
    name: "ali",
    phoneNumber: "1111",
    age: 21
}

const changes = {
    name: "Ali Morad",
    phoneNumber: "71******"
}

const changedPersInf = { ...PersInf, ...changes };

console.log(changedPersInf);

console.log("----------------");
