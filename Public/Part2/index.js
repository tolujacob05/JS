"use strict";

const calAverageDolph = () => {
  const dolphAverage = (85 + 54 + 41) / 3;
  //   const dolphAverage = (44 + 23 + 71) / 3;
  return dolphAverage;
};

const calAverageKoalas = () => {
  const koalasAverage = (23 + 34 + 27) / 3;
  //   const koalasAverage = (65 + 54 + 49) / 3;
  return koalasAverage;
};
console.log(calAverageDolph(), calAverageKoalas());

const checkWinners = () => {
  const average = calAverageDolph();
  const average2 = calAverageKoalas();
  if (average >= 2 * average2) {
    console.log(`Doplhins win (${calAverageDolph()} vs ${calAverageKoalas()})`);
  } else if (average2 >= 2 * average) {
    console.log(`Koalas win (${calAverageKoalas()} vs ${calAverageDolph()})`);
  } else {
    console.log("no winner");
  }
};

const winner = checkWinners();

console.log(winner);

// USING THE DRY(DO NOT REPEAT) METHOD
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins}vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("no winner");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// ARRAYS

// const tip = (a, b, c) => [a + b + c] / 3;

const calcTip = (bill) => {
  if (bill <= 300 && bill >= 50) {
    return bill * (15 / 100);
  } else {
    return bill * (20 / 100);
  }
};

const bills = [125, 555, 44];

const tip = [calcTip(bills[0])];
const tip2 = [calcTip(bills[1])];
const tip3 = [calcTip(bills[2])];

console.log(tip);
console.log(tip2);
console.log(tip3);

const total = [bills[0] + calcTip(bills[0])];
const total1 = [bills[1] + calcTip(bills[1])];
const total2 = [bills[2] + calcTip(bills[2])];

console.log(total, total1, total2);

const jonas = {
  firstName: "Jonas",
  hasDriversLicence: true,
  job: "teacher",
  birthYear: "2007",
  friends: ["Micheal", "Peter", "Steven"],

  calacAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

const tolu = {
  firstName: "Toluwase",
  birthYear: 1999,
  occupation: "Frontend Developer",
  licence: function () {
    const hasDriversLicence = false;
    if (hasDriversLicence === true) {
      return "has drivers a license";
    } else {
      return "does not have a drivers license";
    }
  },

  calcToluAge: function () {
    this.currentAge = 2023 - this.birthYear;
    return this.currentAge;
  },
};

console.log(
  `${tolu.firstName} is a ${tolu.calcToluAge()} years old ${
    tolu.occupation
  }, and he ${tolu.licence()}`
);

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBmi: function () {
    const BMI = this.mass / this.height ** 2;
    return BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBmi: function () {
    const BMI = this.mass / this.height ** 2;
    return BMI;
  },
};

console.log(mark.calcBmi(), john.calcBmi());

// const summary = () => {
//   if (mark.calcBmi() > john.calcBmi()) {
//     console.log(`
//         ${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBmi()})
//         is higher than ${john.firstName} ${
//       john.lastName
//     }'s BMI (${mark.calcBmi()})
//         `);
//   } else {
//     console.log(`
//         ${john.firstName} ${john.lastName}'s BMI (${mark.calcBmi()})
//         is higher than ${mark.firstName} ${
//       mark.lastName
//     }'s BMI (${mark.calcBmi()})
//         `);
//   }
// };

if (mark.calcBmi() > john.calcBmi()) {
  console.log(`
        ${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBmi()})
        is higher than ${john.firstName} ${
    john.lastName
  }'s BMI (${john.calcBmi()})
        `);
} else {
  console.log(`
        ${john.firstName} ${john.lastName}'s BMI (${john.calcBmi()})
        is higher than ${mark.firstName} ${
    mark.lastName
  }'s BMI (${mark.calcBmi()})
        `);
}

// console.log(summary());

// LOOPING ARRAYS

const jonasArray = [
  "Jonas",
  "Scmedtmann",
  2037 - 1991,
  "teacher",
  ["Johannes", "Micheal", "Steven"],
];

// const jona = [];

jonasArray.unshift(true);

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
}

const years = [2004, 1893, 2005, 2006, 2007, 2008, 2009];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(years.indexOf(2004));

console.log(ages);

// BREAK AND CONTINUE LOOP METHODS
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i]);
}

// LOOPING BACKWARD
console.log("--- LOOPING BACKWARD ---");
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

jonasArray.push("city");
console.log(jonasArray);

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

// HOW TO CREATE A LOOP IN A LOOP
for (let jump = 1; jump < 5; jump++) {
  console.log(`You need to jump ${jump}`);

  for (let amountOfJump = 1; amountOfJump < 5; amountOfJump++) {
    console.log(`Jump${jump}: ${amountOfJump} times`);
  }
}

// THE WHILE LOOP
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE LOOP: the amount of times i need to jump ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`The dice rolled is ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("The dice rolled now is 6");
  }
}

// CODING CHALLENGE 4
const amount = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip0 = [];
const totals = [];

for (let i = 0; i < amount.length; i++) {
  tip0.push(calcTip(amount[i]));
  totals.push(tip0[i] + amount[i]);
}

console.log(amount);
console.log(tip0);
console.log(totals);

const calAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calAverage(totals));
