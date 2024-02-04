'use strict'
// Question Number  1 
ages = [3, 9, 23, 64, 2, 8, 28, 93]
let result= (ages.length-1) -(ages[0]);
console.log(result);
newAge= 42;
ages.push(newAge);
result = (ages.length-1) - (ages[0]);
// Start Of For Loop
let totalAges =0
for (let i=0; i<ages.length; i++) {
    totalAges += ages[i];
}
// average  Age
let avgAge = totalAge/ ages.length;
console.log(avgAge)


// Question Number 2


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// START OF FOR LOOP
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
// Finding Average Letters
let averageLetters = totalLetters / names.length;
// STRING
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';}
console.log(averageLetters)

// Part 3

// Question Number 3
let num = [1,2,3,4,45,]
let last = num[num.length-1];
console.log(last)


//Question Number 4
// 0 index


let first = num[0];
console.log(first)


// Question Number 5


let nameLengths = []
for (let i =0; i<names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log(nameLengths);


// Question Number 6


let sum = 0; 
for (let i=0; i<nameLengths.length; i++) {
    sum+= name.lengths[i];
}
console.log(sum)



// Question 7
function newWord (word, n) {
    let result = 0 ;
    while (n > 0) {
        result += word;
        n--;
    }
    return result
}
let newString = newWord('HI',4)
console.log(newString)


//Question 8
function getFullName (firstName, lastName) {
    return `${firstName} ${lastName}`
}
let fullName = getFullName ('Jarah', 'Al Ghazi')
console.log(fullName)


// Question 9


function isSumGreaterThan100(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}


//Question 10
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Avoid division by zero for an empty array
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}
// Question 11 
function isAverageGreaterThan(arr1, arr2) {
    // Calculate average of elements in the first array
    let sumArr1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sumArr1 += arr1[i];
    }
    let avgArr1 = sumArr1 / arr1.length;

    // Calculate average of elements in the second array
    let sumArr2 = 0;
    for (let j = 0; j < arr2.length; j++) {
        sumArr2 += arr2[j];
    }
    let avgArr2 = sumArr2 / arr2.length;

    // Compare averages using if-else statement
    if (avgArr1 > avgArr2) {
        return true;
    } else {
        return false;
    }
}

//Question 12
let willBuyDrink = function (isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket < 10.50) {
        return true
    } else {
        return false
    }
}
console.log(willBuyDrink(false, 11.40));

// Question 3 
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return `${number} is even.`;
    } else {
      return `${number} is odd.`;
    }
  }
  // THis function tells the computer to return if a number is odd or even based on the modulo operator //
  