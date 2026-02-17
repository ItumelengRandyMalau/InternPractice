/*Problem:

Create a function that:

receives an array of numbers

returns the average of the numbers

if the array is empty, return null*/

function returnAvarage(numbers){
let count = 0;
  if(numbers.length === 0){
	return null;}
  for(let i = 0; i < numbers.length; i++){
	count += numbers[i];
  }
return count / numbers.length;
}
console.log( returnAvarage([[2, 4, "6", 8]]));
