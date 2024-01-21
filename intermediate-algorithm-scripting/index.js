/*// sum all in range
function sumAll(arr) {
  const maxArr = Math.max(...arr);
  const minArr = Math.min(...arr);
  let sum = 0;
  for (let i = minArr; i < maxArr + 1; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sumAll([5, 10]));
*/
/*
// diff two arrays
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
*/

// seek and destroy
function destroyer(arr) {
  const valuesToRemove = Object.values(arguments).slice(1);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valuesToRemove.length; j++) {
      if (arr[i] === valuesToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
