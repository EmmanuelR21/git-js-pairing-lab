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

