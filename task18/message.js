const MessageMixer = require('./messageMixer');

function displayMessage() {
  console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
  console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(MessageMixer.reverseWord("What is the color of the sky?"));
  console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
  console.log(MessageMixer.replaceFirstOccurrence("What is the color of the sky?", "sky", "water"));
  console.log(MessageMixer.encode("What is the color of the sky?"));
  console.log(MessageMixer.palindrome("hello"));
  console.log(MessageMixer.pigLatin("Hello world", "@"));
}

displayMessage();
