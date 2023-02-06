# JS-3nd-Lesson
### task 1:generate random arrays.
### task 2:handle strings as arrays.  
### task 3correctly translate the requirements for a complex task into code.  
Task 1...  
Write an array generator of length "count" with random numbers from n to m. Note that n and m can be negative, and it can also be n > m or n < m. Print the result with console.log.  

Task 2...  
Using a loop, create an inverted version of an arbitrary string. For example, the string "Hello, world!" should become "!dlrow ,olleH".  

Task 3...  
The tank is driving along a road that may have anti-tank mines. The road must be represented as a roadMines array of 10 boolean elements. If the element is true, then it is a mine. The movement of the tank should be represented as a loop in which one iteration is the advancement of the tank to the next section of the road. When moving, print the message "tank moved ${position}" to the console. If the tank hit a mine, then you need to display the message "tank damaged" if this is the 1st explosion, and "tank destroyed" if this is the 2nd explosion. After the 2nd explosion, the tank is considered destroyed and stops moving.  

my decision:   
// Task 1:  

let count = 70;  
let num1 = 100;  
let num2 = -5;  

function arrWithRandomNums(num1, num2, lengt) {  
__        let arr = [];  
__        let min = Math.min(num1, num2);  
__        let max = Math.max(num1, num2);  
__        for (let i = 0; i < lengt; i++) {  
______            let randomNum = Math.round(Math.random() * max + min);  
______            arr.push(randomNum);  
__        }  
__        return arr;  
}  

console.log(arrWithRandomNums(num1, num2, count));  
console.log("\n");  

// Task 2:  

let str = '12345678';  

function reversLine(yourLine) {  
__        let lineRevers = '';  
__        for (let char = yourLine.length - 1; char >= 0; char--) {  
______            lineRevers = lineRevers + yourLine[char];  
______            console.log(lineRevers)  
__        }  
__        return lineRevers;  
}  

console.log(reversLine(str) + '\n \n');  


// Task 3:  

let roadMines = [true, false, false, false, false, false, false, false, false, true];  
let helth = 2;  

for (let step = 0; step < roadMines.length; step++) {  
__        console.log(`tank moved ${step + 1} position`)  
__        if (roadMines[step] === true) {  
______            console.log('tank damaged');  
______            helth -= 1;  
__        } if (helth === 0) {  
______            console.log('tank destroyed'); break;  
__        }  
}  

// Task 4:  

let chosenDay = 'Wednesday';  

function calendarWithSelectedFirstDay(yourDay) {  
__        let monthJan = [];  
__        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fridey', 'Saturday'];  
__        let indexOfDay = week.indexOf(yourDay);  

__        for (let dayOfMonth = 1; dayOfMonth < 32; dayOfMonth++) {  
______            monthJan.push(`${dayOfMonth} Januar, ${week[(indexOfDay + (dayOfMonth - 1)) % 7]}`);  
__        }  
__        return monthJan;  
}  

console.log(calendarWithSelectedFirstDay(chosenDay));  

