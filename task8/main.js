// Define a variable userName and set it to an empty string.
let userName = '';

// Use a ternary expression to greet the user based on whether they entered a name or not.
userName !== '' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Create a variable named userQuestion.
const userQuestion = 'What will my future be like?';

// Log the user's question to the console, including their name if provided.
console.log(`${userName !== '' ? `${userName} asks:` : 'The user asks:'} ${userQuestion}`);

// Generate a random number between 0 and 7 and store it in randomNumber.
const randomNumber = Math.floor(Math.random() * 8);

// Create a variable named eightBall and set it to an empty string.
let eightBall = '';

// Use a switch statement to assign a reply to the eightBall variable based on the value of randomNumber.
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Sorry, something went wrong.';
}

// Log the Magic Eight Ball's answer to the console.
console.log(`Magic Eight Ball says: ${eightBall}`);
