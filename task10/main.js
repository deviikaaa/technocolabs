 // Function to get user's choice
const getUserChoice = () => {
    const userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'bomb') {
      return 'bomb'; // Secret cheat code
    } else {
      alert('Invalid choice. Please choose rock, paper, or scissors.');
      return getUserChoice(); // Recursively ask for valid input
    }
  };
  
  // Function to get computer's choice
  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };
  
  // Function to determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  };
  
  // Function to play the game
  const playGame = () => {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Start the game
  playGame();
  