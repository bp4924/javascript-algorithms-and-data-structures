// LEETCODE Medium # 6

//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
/*
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // split s
  const splitS = s.split("");
  console.log(splitS);
  const newString = [];
  // loop through splitS
  for (let i = 0; i < splitS.length; i++) {
    let addSpace = i % numRows;
    if (i !== 0) {
      if (addSpace === 0) {
        newString.push("");
        console.log("space", newString);
      } else {
        newString.push(splitS[i]);
        console.log("letter", newString);
      }
    } else {
      newString.push(splitS[i]);
      console.log("letter", newString);
    }
  }
  return newString;
  /*    const newString = [];
    for (let j = 0; j < numRows; j++) {
      let position = [j, i];
      newString.push(splitS[i + j]);
      console.log(position, newString);
    }
    */
};
// change column when row > numRow * col + 1
// read by row
// remove blanks
// return as string
//};

convert("PAYPALISHIRING", 3);
/* Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/
