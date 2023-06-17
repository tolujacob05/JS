"use-strict";

const Person = function (firstName, birthYear) {
  // INSTANCE PROPERTIES
  this.name = firstName;
  this.year = birthYear;

  //   NEVER CREATE A METHOD IN A CONSTRUCTOR FUNCTION
  //   this.calcAge = function () {
  //     console.log(2037 - this.year);
  //   };
};

const tolu = new Person("Toluwase", 1999);
console.log(tolu);
// AS MANY OBJECTS CAN BE CREATED USING THE NEW PERSON CONSTRUCTOR

// OPERATOR USED TO TEST FOR INSTANCES
console.log(tolu instanceof Person);

// PROTOTYPES
Person.prototype.calcAge = this.calcAge = function () {
  console.log(2037 - this.year);
};

tolu.calcAge();

// TO CHECK PROTOTYPE
console.log(tolu.__proto__);
console.log(tolu.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(tolu));
console.log(Person.prototype.isPrototypeOf(Person));

// PROPERTIES CAN ALSO BE SET ON PROTOTYPES
Person.prototype.nationality = "Nigerian";
console.log(tolu.nationality);

// TO CHECK FOR CONSTRUCTOR OWN PROPERTY
console.log(tolu.hasOwnProperty("name"));

// ES6 CLASSES

// CLASS EXPRESSION
// const PersonCl = class {}

// CLASS DECLARATION
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jes = new PersonCl("Jessica", 1998);
console.log(jes);
jes.calcAge();

// 1. CLASS ARE NOT HOISTED
// 2. THEY ARE FIRST CLASS CITIZENS meaning they can be passed into functions and also return then from functions
// 3. THEY ARE EXECUTED IN STRICT MODE

// GETTERS AND SETTERS
const account = {
  owner: "Jonas",
  movements: [300, 400, 200, 120],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 230;
console.log(account.movements);

// CODING CHALLENGE
const Car = function (car, speed) {
  this.car = car;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`${this.car} going at ${(this.speed += 10)}km/h`);
};

Car.prototype.brake = function () {
  console.log(`${this.car} going at ${(this.speed -= 5)}km/h`);
};

const BMW = new Car("BNW", 120);
console.log(BMW);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();

const Mercedes = new Car("Mercedes", 95);
console.log(Mercedes);

Mercedes.accelerate();
Mercedes.brake();
