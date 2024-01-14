// basic js Object
let dog = {
  name: "Lola",
  numLegs: 4,
  // create method on object
  sayLegs: function () {
    //    return dog.name + " has " + dog.numLegs + " legs";
    return `${dog.name} has ${dog.numLegs} legs`;
  },
};
console.log(dog.sayLegs());
