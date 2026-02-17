/*Rules:

If input is not an array → return null

If array is empty → return null

If any element is not a valid number → return null

Return the first number greater than 0

If no positive number exists → return null*/

 function findFirstPositive(numbers){
  if(!Array.isArray(numbers)){
      return null;
    }
  if(numbers.length === 0){
    return null;
  }
  for(let i = 0; i < numbers.length; i++){
    if(typeof numbers[i] !== "number" || Number.isNaN(numbers[i])){
	return null;
  }
    if(numbers[i] > 0){
	return numbers[i];
    }
  }
  return null;
}
console.log(findFirstPositive([-1, 0, 2, 7]));
