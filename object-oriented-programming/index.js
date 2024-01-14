// basic js Object
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
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

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
