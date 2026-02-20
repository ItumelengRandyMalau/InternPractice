/*a function that sums positive numbers
 Rules:
Not array → null

Empty → null

Invalid element → null

Stop at first negative

Return sum
*/

function sumUntilNegative(numbers){
  if(!Array.isArray(numbers)){
	return null;
	}
  if(numbers.length === 0){
	return null;
	}
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
	if(typeof numbers[i] !== "number" || Number.isNaN(numbers[i])){
		return null;
	}
	if(numbers[i] < 0 ){
		return sum;
	}
	sum += numbers[i];
  }
return sum;
}
console.log( sumUntilNegative([-4, 1,3,-9,20]));
