// sum of odd fibs
function sumFibs(num) {
  // create fib sequence

  let fibSeq = [];
  let result = 0;
  let fibNbr = 0;
  for (let i = 0; i <= num; i++) {
    if (i === 0 || i === 1) {
      fibSeq.push(i);
      result += i;
    } else {
      fibNbr = fibSeq[i - 1] + fibSeq[i - 2];
      fibSeq.push(fibNbr);
      if (fibNbr % 2 !== 0 && fibNbr <= num) {
        result += fibNbr;
      }
    }
  }
  // exclude evens
  // sum result
  return result;
}

console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
