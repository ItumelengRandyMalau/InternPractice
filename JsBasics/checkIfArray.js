/*Create function that takes one parameter

If input is not an array → return null

If array length is 0 → return 0

Initialize counter to 0

Loop through array starting at index 0

If current value > 0 → increment counter

After loop completes → return counter*/

function checkIfArray(numbers){
  if(!Array.isArray(numbers)){
    return null;
  }
 if(numbers.length === 0){
  return 0;
  }
  let count = 0;
  for(let i = 0; i < numbers.length; i++){
  if(typeof numbers[i] !== "number" || Number.isNaN(numbers[i])){
    return null;
  }
  if(numbers[i] > 0){
    count++;
  }
}
return count;
}
console.log(checkIfArray([1, 2, 4, 5, "1", 10, "hello"]));
