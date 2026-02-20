/*Write a function:

longestIncreasingStreak(numbers)
Rules:

If input is not an array → return null

If array is empty → return 0

If any element is not a valid number → return null

Return the length of the longest consecutive increasing sequence*/

function longestIncreasingStreak(numbers){
  if(!Array.isArray(numbers)){
	return null;
  }
  if(numbers.length === 0){
	return 0;
  }
  let currentstreak = 1;
  let maxstreak = 1;
	for (let i = 1; i < numbers.length; i++) {
		if (typeof numbers[i] !== "number" || Number.isNaN(numbers[i])) {
			return null;
		}

		if (numbers[i] > numbers[i - 1]) {
			currentstreak++;
		} else { currentstreak = 1; }
		maxstreak = Math.max(maxstreak, currentstreak);
	}
return maxstreak;
}

console.log( longestIncreasingStreak([7, "8"]));
