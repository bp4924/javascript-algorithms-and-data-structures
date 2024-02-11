// sum of odd fibs
function sumFibs(num) {
  // create fib sequence

  let fibSeq = [];
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      fibSeq.push("0");
    } else {
      fibSeq.push([i - 1] + [i - 2]);
    }
  }

  // exclude evens
  // sum result
  return fibSeq;
}

console.log(sumFibs(4));
