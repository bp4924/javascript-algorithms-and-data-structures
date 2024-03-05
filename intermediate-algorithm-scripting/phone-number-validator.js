function telephoneCheck(str) {
  console.log(str);

  const regex = /^[1\s]?[\s]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;
  const noLeftParens = /^[1\s]?[\s]?[0-9]{3}[)][-\s]?[0-9]{3}[-\s]?[0-9]{4}$/; // right without left
  const noRightParens = /^[1\s]?[\s]?[(][0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/; // left without right

  if (str.length < 10) return false; // minimum 10 numbers

  if (str.match(regex)) {
    // check for unmatched parens
    if (str.match(noLeftParens) || str.match(noRightParens)) {
      return false;
    }
    return true;
  }
  return false;
}

console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("1 (555) 555-5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("1(555)555-5555")); // true
console.log(telephoneCheck("555-5555")); // false
console.log(telephoneCheck("5555555")); // false
console.log(telephoneCheck("1 555)555-5555")); // false
console.log(telephoneCheck("1 555 555 5555")); // true
console.log(telephoneCheck("1 456 789 4444")); // true
console.log(telephoneCheck("123**&!!sdf#")); // false

console.log(telephoneCheck("55555555")); // false

console.log(telephoneCheck("6054756961")); // false

console.log(telephoneCheck("2 (757) 622-7382")); // false

console.log(telephoneCheck("0 (757) 622-7382")); // false

console.log(telephoneCheck("-1 (757) 622-7382")); // false
console.log(telephoneCheck("2 757 622-7382")); // false.)
console.log(telephoneCheck("10 (757) 622-7382")); // false
console.log(telephoneCheck("27576227382")); // false.)
console.log(telephoneCheck("(275)76227382")); // false.)
console.log(telephoneCheck("2(757)6227382")); // false.)
console.log(telephoneCheck("2(757)622-7382")); // false.)
console.log(telephoneCheck("555)-555-5555")); // false.)
console.log(telephoneCheck("(555-555-5555")); // false.)
console.log(telephoneCheck("(555)5(55?)-5555")); // false)
console.log(telephoneCheck("55 55-55-555-5")); // false.)
console.log(telephoneCheck("11 555-555-5555")); // false)
