// Step 1: Set the initial temperature in Kelvin
const kelvin = 293;

// Kelvin will remain constant, so we use the 'const' variable type.

// Step 2: Convert Kelvin to Celsius
const celsius = kelvin - 273;

// To convert to Celsius, we subtract 273 from the Kelvin temperature.

// Step 3: Calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// We use 'let' for Fahrenheit since we will be rounding it in the next step.

// Step 4: Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// We use the .floor() method from the Math object to round down the Fahrenheit temperature.

// Step 5: Log the temperature in Fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
