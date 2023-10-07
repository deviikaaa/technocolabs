// Step 1: Create a variable named myAge and set it equal to your age as a number
const myAge = 30; // Replace 30 with your actual age

// Step 2: Create a variable named earlyYears and save the value 2 to it
let earlyYears = 2;

// We use let for earlyYears because we'll reassign its value.

// Step 3: Multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears
earlyYears *= 10.5;

// Step 4: Subtract 2 from myAge and set the result equal to a variable called laterYears
let laterYears = myAge - 2;

// Step 5: Multiply the laterYears variable by 4 to calculate dog years for later years
laterYears *= 4;

// Step 6: Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
const myAgeInDogYears = earlyYears + laterYears;

// Step 7: Create a variable named myName and store your name in all lowercase
const myName = "john"; // Replace "john" with your name in lowercase

// Step 8: Display your name and age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// This line combines your name, age in human years, and age in dog years using string interpolation.
