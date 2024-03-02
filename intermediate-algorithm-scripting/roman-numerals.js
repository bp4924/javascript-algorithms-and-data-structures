// loop through the integer by position
// for int[0]

const int = 3999;
const str = int.toString();
let result = "";
for (let i = 0; i <= str.length - 1; i++) {
  let position = str.length - i;
  switch (position) {
    case 4:
      console.log("I");
      result = "I" + result;
      break;
    case 3:
      console.log("X");
      result = "X" + result;
      break;
    case 2:
      console.log("C");
      result = "C" + result;
      break;
    case 1:
      console.log("M");
      result = "M" + result;
      break;
  }

  // find value at position
  // replace with roman numeral
  // create string of roman numerals
  // console.log(result);
}
console.log(result);
