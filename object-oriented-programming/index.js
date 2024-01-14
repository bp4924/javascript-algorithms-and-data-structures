/* // basic js Object
let dog = {
  name: "Lola",
  numLegs: 4,
  // create method on object
  sayLegs: function () {
    //    return dog.name + " has " + dog.numLegs + " legs";
    //    return `${dog.name} has ${dog.numLegs} legs`;
    //remove object name with this
    return `${this.name} has ${this.numLegs} legs`;
  },
};
//console.log(dog.sayLegs());

// constructors
function xDog() {
  this.name = "Lola";
  this.color = "black";
  this.numLegs = 4;
}

let xhound = new xDog();

// extend constructor to receive arguments
function Dog1() {
  this.name = name;
  this.color = color;
  this.numLegs = legs;
}

let name = "lola";
let color = "red";
let legs = 4;
let hound = new Dog1(name, color, legs);
//console.log(hound);

// own properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps1 = [];
// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps1.push(property);
  }
}
// console.log(ownProps1);

// prototype properties
function Dog2(name) {
  this.name = name;
}
Dog2.prototype.numLegs = 4;

// Only change code above this line
let beagle1 = new Dog2("Snoopy");
//console.log(beagle1.numLegs);

// iterate through all properties
function Dog2(name) {
  this.name = name;
}

Dog2.prototype.numLegs = 4;

let beagle = new Dog2("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps);
console.log(prototypeProps);

// change prototype to new Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log(`${this.name} is a good dog.`);
  },
};
console.log(new Dog("Lola"));

// inheritance from supertype
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
*/
/*
// add methods after inheritance
function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog();


// override inherited methods
function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

// add methods using mixins
let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("Gliding");
  };
};

glideMixin(bird);
glideMixin(boat);

// privliged methods
function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}
*/

// create a module with IIFE
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();
