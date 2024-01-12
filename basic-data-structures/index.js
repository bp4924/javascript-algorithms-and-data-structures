// access an arrayls contents
let myArray = ["a", "b", "c", "d"];
myArray[1] = "boo";
//console.log(myArray);

// add items using push and unshift methods
function mixedNumbers(arr) {
  arr.push([7, "VIII", 9]);
  arr.unshift("I", 2, "three");
  return arr;
}
//console.log(mixedNumbers(["IV", 5, "six"]));

// remove items with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

//console.log(popShift(["challenge", "is", "not", "complete"]));

// remove items with splice method
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
//console.log(arr);

// replace items with splice method
function htmlColorNames(arr) {
  //  console.log(arr);
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

/*console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
*/

// copy array using slice()
function forecast(arr) {
  let newArr = arr.slice(2, 4);
  return newArr;
}
/*
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
*/

// copy array with spread operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
//console.log(copyMachine([true, false, true], 2));

// combine arrays using spread operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
//console.log(spreadOut());

// check for element with indexOf()
function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) == -1) {
    return false;
  } else {
    return true; // Only change code above this line
  }
}

//console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
//console.log(quickCheck(["squash", "onions", "shallots"], "onions"));

// iterate through array items
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
/*
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
*/
// nested arrays
let myNestedArray = [
  // Only change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
  // Only change code above this line
];

// add elements to objects
const foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods1.bananas = 13;
foods1.grapes = 35;
foods1.strawberries = 27;

//console.log(foods1);

// modify nested object
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};
userActivity.data.online = 45;
//console.log(userActivity);

// access property names in objects
let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods2[scannedItem];
}
//console.log(checkInventory("apples"));

// delete object property
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
delete foods.apples;
delete foods.plums;
delete foods.strawberries;
//console.log(foods);

// check for property
let users1 = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  if (
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
  ) {
    return true;
  } else {
    return false;
  }
}
//console.log(isEveryoneHere(users1));

// iterate through keys
const users4 = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  let count = 0;
  for (let user in allUsers) {
    if (allUsers[user].online === true) {
      count++;
    }
  }
  return count;
}
//console.log(countOnline(users4));

// object.keys()
let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}
//console.log(getArrayOfUsers(users));

// modify array in object
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, "Pete"));
