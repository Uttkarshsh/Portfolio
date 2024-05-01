// Define the input string
const inputString = "This is a sample string with too many aaaas and aaaaaas.";

// Define the regular expression pattern to match two or more 'a's
const regexPattern = /a{2,}/g;

// Replace occurrences of the pattern with the letter 'b'
const modifiedString = inputString.replace(regexPattern, 'b');

// Output the modified string
console.log(modifiedString);
