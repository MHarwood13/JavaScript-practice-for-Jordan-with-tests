// Build a function called stringChanger() that takes in two arguments: a word and
// an operation. Based on the operation, your function will return the word
// modified in some way. The operations are:


// "capitalize": Capitalize the first letter in the word.


// "uppercase": Capitalize every letter in the word.


// "double": Return the word twice in a row.


// "reverse": Return the string with the letters in reverse order.


// If the operation is invalid, return the word, unchanged.

//  TEST INSTRUCTIONS - For this problem, you will be using the terminal.
// run node 19-stringChanger.js to see if your code works.
// If you see the message "You have scored 0/5 points." then your code is not working correctly.
//  If you see the message "You have scored 5/5 points." then your code is working correctly.

// ** Write your code here **


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");

module.exports = { stringChanger };
