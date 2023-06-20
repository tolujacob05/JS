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

  //   STATIC METHOD
  static hey() {
    console.log("Hey Tolu 👋🏾");
    // console.log(this);
  }
}
PersonCl.hey();

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

// STATIC METHOD
// THE FROM METHOD <---- It converts any array like structure into an array
// It cannot be used on an array
// It cannot be inherited because it is not in the prototypal iheritance instead in the constructor
Person.hey = function () {
  console.log("Hey Tolu 👋🏾");
};
Person.hey();

// OBJECT.CREATE()
// THERE ARE NO PROTOTYPE PROPERTIES, CONSTRUCTOR AND NEW INVOLVED
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const james = Object.create(PersonProto);
james.init("James", 1987);
james.calcAge();

// INHERITANCE
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} abd I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

// INHERITANCE IN ES6 CLASSES
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    // THIS MUST ALWAYS HAPPEN FIRST BECAUSE IT IS RESPONSIBLE FOR THE CREATION OF THE THIS KEYWOPRD
    super(firstName, birthYear);
    this.course = course;
  }

  introduce = function () {
    console.log(`My name is ${this.firstName} abd I study ${this.course}`);
  };

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha", 2015, "Computer Science");
martha.introduce();
martha.calcAge();

// INHERITANCE IN OBJECT.CREATE()
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} abd I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2018, "Computer Science");
console.log(jay);
jay.introduce();
jay.calcAge();

class Account {
  // Public Fields <----- They are not on the prototype instead on the instances. They can also be refrenced using the this keyword
  locale = navigator.language;

  //   Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // PROTECTED PROPERTY
    // this._movements = [];
    // this.locale = navigator.language;
  }

  //   PUBLIC METHODS
  //   PUBLIC INTERFACCE
  getMovement() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
      return this;
    }
  }

  //   PRIVATE METHODS
  _approveLoan(value) {
    return true;
  }
}

const acc1 = new Account("Toluwase", "NGN", 2222);

// THIS METHOD IS NOT ADVISIBLE TO DO
// acc1.movements.push(1000);
// acc1.movements.push(-300);

acc1.deposit(3000);
acc1.withdraw(-1000);
acc1.requestLoan(200);
// acc1.approveLoan(2000);
// console.log(acc1);
console.log(acc1);

// CHAINING METHODS
acc1.deposit(200).deposit(500).withdraw(35).requestLoan(2300).withdraw(1000);
console.log(acc1.getMovement());

// TRULY PRIVATE CLASS FIELDS AND METHODS
// FOUR TYPES OF FIELDS AND METHODS
/*
1. PUBLIC FIELDS
2. PRIVATE FIELDS
3. PUBLIC METHODS
4. PRIVATE METHODS
*/

// CODING CHALLENGE 1
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

// CODING CHALLENGE 2
class Cars {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  get speedUS() {
    return `${this.brand} is going at ${(this.speed /= 1.6)}km/h`;
  }

  set speedUS(currentSpeed) {
    this.speed = currentSpeed * 1.6;
    // return `${this.brand} is going at ${currentSpeed * 1.6}`;
  }

  brake = function () {
    console.log(`${this.brand} going at ${(this.speed -= 5)}km/h`);
    return this;
  };
}

const ford = new Cars("Ford", 120);
console.log();
console.log(ford.speedUS);
console.log(ford.speedUS);
console.log(ford.speedUS);
ford.speedUS = 120;
console.log(ford);

// CODING CHALLENGE 3
const EV = function (car, speed, charge) {
  Car.call(this, car, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  console.log(
    `${this.car} going at ${(this.speed += 20)}km/h, with a charge of ${this
      .charge--}%`
  );
};

const tesla = new EV("Tesla", 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();

// CODING CHALLENGE 4
class EVCL extends Cars {
  #charge;
  constructor(brand, speed, charge) {
    super(brand, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    console.log(
      `${this.brand} going at ${(this.speed += 20)}km/h, with a charge of ${this
        .#charge--}%`
    );
    return this;
  }
}

const rivian = new EVCL("Rivian", 120, 23);
console.log(rivian);

rivian.accelerate().brake().chargeBattery(94);
rivian.accelerate().brake();
rivian.accelerate().brake();
console.log(rivian);
