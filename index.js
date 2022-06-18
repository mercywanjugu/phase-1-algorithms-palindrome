
function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split('').reverse().join('');
  return reverseWord === word;
}

/* 
  Add your pseudocode here
*/ // call on function isPalindrome
  //find if the argument is a palindrome or not
  //return false/true depending on end value (palindrome or not)

/*
  Add written explanation of your solution here
*/ //The argument is taken in and used to make a new variable that is turned into an array of each character in the word, reversed in order, and joins them back together into a new string at the end.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;