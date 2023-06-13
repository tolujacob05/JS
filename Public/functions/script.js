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

// FILTER METHOOD
const deposit = movements.filter(function (movement) {
  return movement > 0;
});
console.log(deposit);

// const deposit = [];
// for (const movement of movements) if (movement > 0) deposit.push(movement);
// console.log(deposit);

const withdrawals = movements.filter(function (movement) {
  return movement < 0;
});
console.log(withdrawals);

const withdraw = [];
for (const movement of movements) if (movement < 0) withdraw.push(movement);
console.log(withdraw);

// THE REDUCE METHOD
const total = movements.reduce(function (acc, movement, i, arr) {
  console.log(`iterations ${i}: ${acc} `);
  return acc + movement;
}, 0);

console.log(total);

let sum = 0;
for (const [i, value] of movements.entries()) {
  sum += value;
  console.log(`iteration ${i}: ${sum}`);
}
console.log(sum);

let sum2 = 0;
movements.forEach((movement, i) => {
  sum2 += movement;
  console.log(`iteration ${i}: ${sum2}`);
});
console.log(sum2);

// Using rduce to get one single value
const max = movements.reduce(
  (acc, movement) => (acc > movement ? acc : movement),
  movements[0]
);
console.log(max);

const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];
// let humanAge = [];

const calcAverageHumanAge = function (ages) {
  let humanAge = [];
  ages.map(function (age, i) {
    if (age <= 2) {
      return humanAge.push(2 * age);
    } else if (age > 2) {
      return humanAge.push(16 + age * 4);
    }
  });
  console.log(humanAge);

  const lessThan18 = humanAge.filter(function (age) {
    return age >= 18;
  });
  console.log(lessThan18);

  const average = lessThan18.reduce(function (acc, age, i) {
    // console.log(`Accumulator ${i}: ${acc}`);
    return acc + age / lessThan18.length;
  }, 0);
  console.log(average);
  // const average = humanAge.reduce(function (acc, age) {
  //   return acc + age / humanAge.length;
  // }, 0);
  // console.log(average);
};

const arrow = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(arrow(test1));
console.log(arrow(test2));
// calcAverageHumanAge(test1);
// calcAverageHumanAge(test2);

const dollarToPound = 1.26;

const totalDepositInGBP = movements
  .filter((movement) => movement > 0)
  .map((movement, i, arr) => {
    // console.log(movement / dollarToPound);
    // console.log(arr);
    return movement / dollarToPound;
  })
  .reduce((acc, movement) => acc + movement, 0);

console.log(totalDepositInGBP);

// const pound = function (amount) {
//   console.log(amount / dollarToPound);
// };

// pound(3840);

// USING THE FIND METHOD
const first = movements.find((movement) => movement < 0);

console.log(first);
console.log(movements);

// USING THE SOME METHOD
// Handles Condition unlike includes which handles equality
const anyD = movements.some((movement) => movement > 0);
console.log(anyD);

// USING THE EVERY
// ONLY RETURNS TRUE IF ALL THE ELEMENTS IN THE ARRAY SATISFIES THE CONDITION PASSED IN
const anyDeposit = movements.every((movement) => movement > 0);
console.log(anyDeposit);

// SEPERATE CALLBACKS
const deposits = (movement) => movement > 0;
console.log(movements.some(deposits));

// THE FLAT AND FLATMAP ARRAY METHOD
// USING THE FLAT MEATHOD
const array = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(array.flat());

// USING THE DEEP
const arrayD = [[[1, 2], 3], [4, [5, 6]], 7, [8, 9]];
console.log(arrayD.flat(2));

// THE SORT METHOD
// WITH STRINGS
const names = ["James", "John", "Aanu", "Opeyemi", "Seun"];
console.log(names.sort());

// WITH NUMBERS
console.log(movements);
// return < 0, A,B
// return > 0, B,A

// ASCEMDING ORDER
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

// OR
movements.sort((a, b) => a - b);
console.log(movements);

// DESCENDING ORDER
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);

// OR
movements.sort((a, b) => b - a);
console.log(movements);

// CREATING ARRAY MANUALLY
const z = new Array(10);
console.log(z.fill(2, 5));

const x = [1, 2, 2, 3, 4, 6, 1, 3, 4, 3, 2];
console.log(x.fill(2, 5, 9));

const y = Array.from({ length: 10 }, (_, i) => i + 2);
console.log(y);

// const dice = Array.from(
//   { length: 100 },
//   (_, i) => Math.trunc(Math.random(i) * 6) + 1
// );

// console.log(dice);

// CODING CHANLLENGE
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Micheal"] },
];

// let food = {};
const recommendedFood = dogs.forEach(function (dog) {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs[0].weight);
console.log(dogs[1].weight);
console.log(dogs[2].weight);
console.log(dogs[3].weight);
console.log(dogs);

const sarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarah);

if (sarah.curFood > sarah.recFood) {
  console.log(`Sarah's dog eats too much food`);
} else if (sarah.curFood < sarah.recFood) {
  console.log(`Sarah's dog is not eating well enough`);
} else {
  console.log(`Sarah's dog is eating well`);
}

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);
// console.log(
//   `${ownersEatTooMuch[0]} and ${ownersEatTooMuch[1]} and ${ownersEatTooMuch[2]}'s dogs eat too much!`
// );
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);
// console.log(
//   `${ownersEatTooLittle[0]} and ${ownersEatTooLittle[1]} and ${ownersEatTooLittle[2]}'s dogs eat too little!`
// );
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

const eatingRec = dogs.some((dog) => dog.curFood === dog.recFood);
console.log(eatingRec);

const eatingOkay = dogs.some(
  (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);

console.log(eatingOkay);

const arrDogEatingOkay = dogs.filter(
  (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(arrDogEatingOkay);

const dogCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogCopy);
// const weight = dogs.forEach(
//   (dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))
// );

// console.log(dogs[0].weight);
// console.log(dogs[0].weight);
// console.log(dogs[0].weight);
