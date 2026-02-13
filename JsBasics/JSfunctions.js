function countGreaterThanTen(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            count++;
        }
    }
    return count;
}
console.log(countGreaterThanTen([1, 5, 12, 15, 3, 8, 20]));
