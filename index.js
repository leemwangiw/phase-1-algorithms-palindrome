// index.js
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // Check if the sanitized string is equal to its reverse
  return sanitizedStr === sanitizedStr.split("").reverse().join("");
}

module.exports = isPalindrome;


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

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
