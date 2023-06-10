"use-srict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...otherWords] = str.split(" ");
  return [first.toUpperCase(), ...otherWords].join(" ");
};

console.log(upperFirstWord("james sucks at bowling"));

// HIGHER PRDER FUNCTION
const transformer = function (str, func) {
  console.log(`Transformed word: ${func(str)}`);
  console.log(`Transformed by: ${func.name}`);
};

transformer("What a great day to be blessed", upperFirstWord);
transformer("What a great day to be blessed", oneWord);

// const greet = function(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// ANOTHER TYPA WAY TO WRITE THE FUNCTION
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet("Good Morning")("Mr Akinjare");
const salute = greet("Hello");
salute("Tolu");

// USING THE THIS KEYWORD
const emirate = {
  airline: "Emirates Airline",
  iataCode: "EA",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `Mr ${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ Flight: `${this.iataCode} ${flightNum}`, name });
  },
};

console.log(emirate);
emirate.book(445, "Akinjare Toluwase");
// Ways to specofocally use a this keyword
/* 
    CALL,
    APPLY and 
    BIND 
*/

const eurowing = {
  airline: "Eurowing",
  iataCode: "EW",
  bookings: [],
};

const book = emirate.book;

// USING THE CALL METHOD
book.call(eurowing, 3902, "Akinjare Mayowa");
console.log(eurowing);

// USING THE APPLY METHOD
const flightData = [234, "James Toodler"];
//   name2: [384, "Dame Dane"],;
book.apply(eurowing, flightData);
book.call(eurowing, ...flightData);

// USING THE BIND METHOD
const newBooking = book.bind(eurowing);
newBooking(890, "Tyler Perry");

// PARTIAL APPLICATION
const addTax = (rate, value) => value * rate + value;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.3);
console.log(addVAT(30));
console.log(addVAT(400));
console.log(addVAT(3000));

// const tax = function (rate = 0.45) {
//   return function (value) {
//     console.log(value * rate + value);
//   };
// };

const tax = (rate) => (value) => value * rate + value;

const R = tax(0.43);
console.log(R(200));

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewNumber() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(",")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewNumber.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
// poll.registerNewNumber();

(function () {
  const header = document.querySelector("h1");
  header.style.color = "tomato";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

console.dir(document.querySelector("body"));

function addNum(num) {
  console.log(num * 2);
  console.log(this);
}

addNum(2);

// ARRAYS
// Using the slice method
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.slice(-7));
console.log(arr.slice());

// USING THE SPREAD OPERATOR
console.log([...arr]);

/* Using the SPLICE method: This methoid is almost the same as the
slice method except that it mutates the array */
console.log(arr.splice(5));
console.log(arr);

// THE RVERSE ARRAY METHOD
// This method also mutates the original array
const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr2.reverse());

const arr3 = arr.concat(arr2);
console.log(arr3);
// OR
// Using the spread operator
console.log([...arr, ...arr2]);

// USING THE JOIN METHOD
console.log(arr3.join("-"));

// THE AT METHOD
// When you want to do method chaining the at method is good
// It also works on strings
const at = [45, 56, 12];
console.log(at.at(0));
console.log(at.at(-1));

// getting the last element of an array
console.log(at[at.length - 1]);
console.log(at.splice(-1)[0]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// Using the for of loop

// for (const movement of movements)
// Accessing the Current index
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(
      `Movement ${i + 1}: You deposited ${movement} amount into your account`
    );
  } else {
    console.log(
      `Movement ${i + 1}: You withdrew ${Math.abs(movement)} from your account`
    );
  }
}

console.log(`---- USING THE forEach function -----`);

// USING THE forEach LOOP
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(
      `Movement ${i + 1}: You deposited ${movement} amount into your account`
    );
  } else {
    console.log(
      `Movement ${i + 1}: You withdrew ${Math.abs(movement)} from your account`
    );
  }
});

// With Maps and Sets
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);
console.log(currencies);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// With Sets
const newCurrency = new Set(["USD", "EUR", "NGN", "GBP"]);
console.log(newCurrency);

newCurrency.forEach(function (value, key, arr) {
  console.log(`${key}: ${value}`);
});

const juliaDog = [3, 5, 2, 12, 7];
const kateDog = [4, 1, 15, 8, 3];
// console.log(juliaDog);
// console.log(juliaDog.splice(-1));
// console.log(juliaDog.splice(-1));

// const shallowKate = kateDog;
// console.log(shallowKate.splice(2, 2));
// console.log(shallowKate);

// const newDog = [...shallowJulia, ...shallowKate];
// console.log(newDog);

const dog = {
  juliaDog: [3, 5, 2, 12, 7],
  kateDog: [4, 1, 15, 8, 3],

  dogAge() {
    const shallowJulia = juliaDog;
    console.log(shallowJulia.splice(-1));
    console.log(shallowJulia.splice(-1));
    console.log(shallowJulia);

    const shallowKate = kateDog;
    console.log(shallowKate.splice(2, 2));
    console.log(shallowKate);

    const newDog = [...shallowJulia, ...shallowKate];
    console.log(newDog);

    for (const [i, value] of newDog.entries()) {
      if (value >= 3) {
        console.log(
          `Dog number ${i + 1} is an adult and is ${value} years old`
        );
      } else {
        console.log(`Dog number ${i + 1} is still a puppy`);
      }
    }
  },
};

dog.dogAge();

const dog2 = {
  juliaDog: [9, 16, 6, 8, 3],
  kateDog: [10, 5, 6, 1, 4],
};

const checkDog = dog.dogAge;
checkDog.call(dog2);

const USD = [200, 300, 22, 12, 10];

const usdToNaira = 750;

// Using the Map method
const naira = USD.map(function (usd) {
  return usd * usdToNaira;
});

console.log(USD);
console.log(naira);

// using the forEach method
const n = [];
// USD.forEach(function (usd) {
//   return n.push(usd * usdToNaira);
// });
// console.log(n);

// for (const usd of USD) n.push(usd * usdToNaira);
// console.log(n);

// USING THE ARROW FUNCTION
const a = USD.map((usd) => console.log(usd * usdToNaira));

// const tax = (rate) => (value) => value * rate + value;

const mov = movements.map(
  (movement, i) =>
    `Movement ${i + 1}: You ${
      movement > 0 ? "deposited" : "withdrew"
    } ${Math.abs(movement)} amount into your account`
);

console.log(mov);
