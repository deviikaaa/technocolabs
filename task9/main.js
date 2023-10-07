// Generate a random race number between 0 and 999.
let raceNumber = Math.floor(Math.random() * 1000);

// Create a variable to indicate whether the runner registered early or not.
let registeredEarly = true; // Change to false for testing different conditions.

// Create a variable for the runner's age.
let runnerAge = 22; // Change to test different ages.

// Check if the runner is an adult and registered early.
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Determine the race time based on age and registration time.
if (runnerAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log("Please see the registration desk.");
}
