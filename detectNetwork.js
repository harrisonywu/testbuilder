// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var network = undefined;
  var cardNumLength = cardNumber.length;
  var firstTwoDigits = cardNumber.substring(0,2);
  var firstDigit = cardNumber.substring(0,1);
  if ((cardNumLength === 14 && firstTwoDigits === '38') || (cardNumLength === 14 && firstTwoDigits === '39')) {
    	network = "Diner's Club";    
  } else if ((cardNumLength === 15 && firstTwoDigits === '34') || (cardNumLength === 15 && firstTwoDigits === '37')) {
        network = "American Express";
  } else if ((cardNumLength===13 && firstDigit==='4') || (cardNumLength===16 && firstDigit==='4') || (cardNumLength===19 && firstDigit==='4')) {
  	  network = "Visa";
  } else if (cardNumLength === 16) {
  	  if (firstTwoDigits==='51' || firstTwoDigits==='52' || firstTwoDigits==='53' || firstTwoDigits==='54' || firstTwoDigits==='55') {
  	  	network = "MasterCard";
  	  }
  }
  return network;
};

