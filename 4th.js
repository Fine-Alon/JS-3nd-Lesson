// Task 1:

let count = 70;
let num1 = 100;
let num2 = -5;

function arrWithRandomNums(num1, num2, lengt) {
    let arr = [];
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    for (let i = 0; i < lengt; i++) {
        let randomNum = Math.round(Math.random() * max + min);
        arr.push(randomNum);
    }
    return arr;
}

console.log(arrWithRandomNums(num1, num2, count));
console.log("\n");

// Task 2:

let str = '12345678';

function reversLine(yourLine) {
    let lineRevers = '';
    for (let char = yourLine.length - 1; char >= 0; char--) {
        lineRevers = lineRevers + yourLine[char];
        console.log(lineRevers)
    }
    return lineRevers;
}

console.log(reversLine(str) + '\n \n');


// Task 3:

let roadMines = [true, false, false, false, false, false, false, false, false, true];
let helth = 2;

for (let step = 0; step < roadMines.length; step++) {
    console.log(`tank moved ${step + 1} position`)
    if (roadMines[step] === true) {
        console.log('tank damaged');
        helth -= 1;
    } if (helth === 0) {
        console.log('tank destroyed'); break;
    }
}

// Task 4:

let chosenDay = 'Wednesday';

function calendarWithSelectedFirstDay(yourDay) {
    let monthJan = [];
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fridey', 'Saturday'];
    let indexOfDay = week.indexOf(yourDay);

    for (let dayOfMonth = 1; dayOfMonth < 32; dayOfMonth++) {
        monthJan.push(`${dayOfMonth} Januar, ${week[(indexOfDay + (dayOfMonth - 1)) % 7]}`);
    }
    return monthJan;
}

console.log(calendarWithSelectedFirstDay(chosenDay));
// node 4th.js