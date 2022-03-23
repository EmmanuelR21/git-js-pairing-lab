//Code your solutions in this file
// problem 1
function fiveToHundred() {
    for(let i = 5; i <= 100; i++) {
        console.log(i);
    }
}

//fiveToHundred();

//problem 2

function multiplesOfThree(){
    for (let i = 0; i <= 100; i++){
        if (i % 3 === 0){
            console.log(i)
        }
    }
}

//multiplesOfThree();

//problem 3

function multiplesOfThreeOrFive() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

//multiplesOfThreeOrFive();

//problem 4

function untilNum(num){
    for (let i = 1; i <= num; i++) console.log(i)
}

//untilNum(10)

//problem 5

function multiply(num1, num2) {
    console.log(num1 * num2);
}

//multiply(3, 9);

// problem 6

function add(num1, num2){
    return num1 + num2;
}
//console.log(add(10, 5));

//problem 7

function isNegative(num) {
    if(num < 0) {
        return true;
    } else if(num === 0){
        return 'This number is neutral.'
    } else {
        return false;
    }
}

//console.log(isNegative(0));

//problem 8

function triangleArea(H, B){
    return (H * B) / 2
}

//console.log(triangleArea(5, 7));

//problem 9

function betweenTwentyAndForty(num) {
    if(num > 20 && num < 40) {
        return true;
    } else {
        return false;
    }
}

//console.log(betweenTwentyAndForty(20));

//problem 10
function largest(num1, num2, num3){
    let largest = 0
    if (num1 > num2){
        largest = num1
    } else {
        largest = num2
    }
    if (largest > num3){
        return largest
    } else return num3
}
//console.log(largest(30, 22, 17))

//BONUS

//Problem 11

function printTime() {
    let time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

//console.log(printTime());

//problem 12

function isLeapYear(year){
    if (year % 4 === 0) {
        return true
    } else {
        return false
    }
}

//console.log(isLeapYear(1800))

//problem 13

function getExtension(file) {
    return "." + file.split('.').pop();
}

//console.log(getExtension("Book.mp3"));

//problem 14

function absolute19(num){
    let absoluteValue = Math.abs(num - 19)
    if (num > 19){
        return 3 * absoluteValue
    }
}

//console.log(absolute19(22))

//problem 15

function switchLetters(string) {
    let emptyString = ""
    
    for(let i = 0; i < string.length; i++) {
        if(i != 0 && i != string.length - 1) {
            emptyString += string[i]
            //console.log(i);
        }
    }return string[string.length - 1] + emptyString + string[0]
    
}

console.log(switchLetters("Emmanuel"));

//problem 16

function changeString(string) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let newString = [];
    
    for(let i = 0; i < string.length; i++) {
        let temp = alphabet.indexOf(string[i]) + 1;
        newString.push(alphabet[temp]);
    }
    console.log(newString.join(''));
}

changeString("hello")