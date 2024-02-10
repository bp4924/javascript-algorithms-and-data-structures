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
  // check for s == null, numRows neg or 0
  if (s === null || numRows <= 0) {
    return "";
  }
  // check for 1 row
  if (numRows === 1) {
    return s;
  }
  let result = "";
  const step = 2 * numRows - 2;

  // skip letters in string based on numRows
  // iterate through s
  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += step) {
      // step through
      result += s[j];
      if (i != 0 && i != numRows - 1 && j + step - 2 * i < s.length) {
        // step to next letter in the row and add it to result
        result += s[j + step - 2 * i];
      }
    }
  }
  return result;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));

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
