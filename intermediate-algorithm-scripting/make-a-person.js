class Person {
  constructor(first, last) {
    let firstName = first;
    let lastName = last;

    this.getFirstName = () => {
      return firstName;
    };

    this.getLastName = () => {
      return lastName;
    };

    this.getFullName = function () {
      return this.getFirstName() + " " + this.getLastName();
    };

    this.setFirstName = (first) => {
      return (firstName = first);
    };

    this.setLastName = (last) => {
      return (lastName = last);
    };

    this.setFullName = (first, last) => {
      this.setFirstName(first);
      this.setLastName(last);
      return this.getFullName();
    };
  }
}

const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());

const haskell = new Person("Haskell", "Ross");
console.log(haskell.setFirstName("Haskell"));

const john = new Person("John", "Doe");
console.log(john.getFullName());
