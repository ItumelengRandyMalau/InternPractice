/*
Create a function that:

receives an array of numbers

returns the sum of only the even numbers*/

function sumEvenNumbers(numbers) {

  let sum = 0;
  for(let i = 0; i<numbers.length;i++){
    if(numbers[i]% 2 === 0){
	sum += numbers[i];
	}
    }
  return sum;
}
console.log(sumEvenNumbers([1, 3, 6,8]));
