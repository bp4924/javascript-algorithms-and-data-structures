// loop through the integer by position
// for int[0]

const int = 3;
const str = int.toString();
let result = "";
for (let i = 0; i <= str.length - 1; i++) {
  let position = str.length - i;
  let value = str[i];
  console.log(`position ${position} Value: ${value}`);
  switch (position) {
    case 1:
      if (value >= 5) {
        console.log(`value before adjustment ${value}`);
        // edge case: value 5 or more
        result = result + "V";
        value = value - 5;
        console.log(`value after adjustment ${value}`);
      }
      // loop through value. add character for each loop

      for (let j = value; j > 1; j--) {
        if (value == 4) {
          // edge case: value is 4. place character ahead
          result = "I" + result;
          break;
        } else {
          result = result + "I";
        }

        result = result + "I";
      }
      console.log(`result 1 ${result}`);
      break;

    case 2:
      if (str[i] >= 5) {
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
*/
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
