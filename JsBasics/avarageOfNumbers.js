/*Problem:

Create a function that:

receives an array of numbers

returns the average of the numbers

if the array is empty, return null*/

function returnAvarage(numbers){
let count = 0;
  if(numbers.length === 0){
	retun;}
  for(let i = 0; i < numbers.length; i++){
	count += numbers[i] / numbers.length;
  }
return count;
}
console.log( returnAvarage([1, 3, 5]));
