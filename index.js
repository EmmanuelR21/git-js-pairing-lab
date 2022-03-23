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

