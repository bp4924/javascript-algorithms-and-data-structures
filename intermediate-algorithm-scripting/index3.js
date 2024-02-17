// sunm all primes
function sumPrimes(num) {
  const primes = [2]; // initiate array of primes
  let result = 2;
  for (let n = 3; n <= num; n += 2) {
    // check odd values
    if (primes.every((prime) => n % prime !== 0)) {
      // if n is prime, add to array and result
      primes.push(n);
      result += n;
    }
  }

  return result;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
