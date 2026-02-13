/*Create a function that:

receives a string

removes extra spaces

converts it to lowercase

returns the cleaned string*/

function cleanString(text) {
  let trimed= text.trim();
  let lowerCased=trimed.toLowerCase();
  return lowerCased;
}
console.log(cleanString("  Hello world  "))

