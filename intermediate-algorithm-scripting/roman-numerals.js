/*
// loop through the integer by position
// for int[0]

const int = 39;
const str = int.toString();
let result = "";
for (let i = 0; i <= str.length - 1; i++) {
  let position = str.length - i;
  let value = str[i];
  console.log(`position ${position} Value: ${value}`);
  switch (position) {
    case 1:
      if (value == 9) {
        // edge case: value 9
        result = result + "IX";
        break;
      }

      if (value >= 5) {
        console.log(`value before adjustment ${value}`);
        // edge case: value 5 or more
        result = result + "V";
        value = value - 5;
        console.log(`value after adjustment ${value}`);
      }
      // loop through value. add character for each loop

      for (let j = 0; j < value; j++) {
        if (value == 4) {
          // edge case: value is 4. place character ahead
          result = "I" + result;
          break;
        } else {
          result = result + "I";
        }
      }
      console.log(`result 1 ${result}`);
      break;

    case 2:
      if (value >= 5) {
        // edge case: value 5 or more
        result = result + "L";
        value = value - 5;
      }
      // loop through value. add character for each loop
      for (let j = value; j > 0; j--) {
        if (value >= 5) {
          result = result + "X";
        } else if (value == 4) {
          // edge case: value is 4. place character ahead
          result = "X" + result;
          break;
        }
        console.log(`result 2 ${result}`);
      }
      result = "X" + result;
      break;
    case 3:
      //
      value = str[i];
      //
      if (value >= 5) {
        // edge case: value 5 or more
        result = result + "D";
        value = value - 5;
      }
      // loop through value. add character for each loop
      for (let j = value; j > 0; j--) {
        if (value >= 5) {
          result = result + "C";
        } else if (value == 4) {
          // edge case: value is 4. place character ahead
          result = "C" + result;
          break;
        }
      }
      result = "C" + result;
      break;

    case 4:
      console.log(`str[ ${i} ] ${str[i]} ${value}`);
      /*      if (str[i] >= 5) {
        // edge case: value 5 or more
        const vinculumV = "V" + "\u0305";
        result = result + vinculumV;
        value = value - 5;
      }

      // loop through value. add character for each loop
      for (let j = 0; j < value - 1; j++) {
        result = result + "M";
      }

      result = "M" + result;
      console.log(`result ${4}: ${result}`);
      break;
  }

  // find value at position
  // replace with roman numeral
  // create string of roman numerals
  // console.log(result);
}
console.log(result);
*/
function intToRoman(num) {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let i in lookup) {
    while (num >= lookup[i]) {
      console.log(`i: ${i} lookup[i]: ${lookup[i]}`);
      roman += i;
      num -= lookup[i];
      console.log(num);
    }
  }
  return roman;
}

console.log(intToRoman(3999));
console.log(intToRoman(4999));
console.log(intToRoman(979));
