function smallestCommons(arr) {
  // sort array
  const [min, max] = arr.sort((a, b) => a - b);
  const numberOfDivisors = max - min + 1;
  // find largest multiple of max (max * all values starting at min)
  let largest = 1;
  for (let i = min; i <= max; i++) {
    largest *= i;
  }
  // start at max, increment by max, until reaching largest
  for (let multiple = max; multiple <= largest; multiple += max) {
    let result = 0;
    for (let divisor = min; divisor <= max; divisor++) {
      // check for first multiple evenly divisible by min
      if (multiple % divisor === 0) {
        // add value to result
        result += 1;
      }
    }
    if (result === numberOfDivisors) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
