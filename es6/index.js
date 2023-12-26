// scope of let
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

//console.log(checkScope());

// use of const
const s = [5, 7, 2];
const x = [2, 5, 7];

function editInPlace() {
  for (let i = 0; i < s.length; i++) {
    s[i] = x[i];
  }
  console.log(s);
  return s;
}
console.log(editInPlace());
