// A value is a piece of data which is the smalles use of information

//  THey are stored in a variable inorder to be used again

// Variables in uppercase are reserved for constant that will never change

const $country = "Nigeria";
const $continent = "Africa";
const $population = 130;
const $capitalCity = "Abuja";

const isIsland = false;
let language = "English";

const description = `${$country} is in ${$continent}, and its ${$population} million people speak ${language}`;
console.log(description);

if ($population > 33) {
  console.log(`${$country}'s population is above average`);
} else {
  console.log(
    `${$country}'s population is ${33 - $population} million below average`
  );
}

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("123" < "57");
console.log(5 + 6 + "4" + 9 - 4 - 2);

const numNeighbours = Number();
//   prompt("How many neighbors countries does your country have?")

if (Number === 0) {
  console.log("Only 1 border");
} else if (Number > 1) {
  console.log("More than 1 border");
} else {
  console.log("No border");
}

if (language === "English" && $population < 50 && !isIsland) {
  console.log(`You should live in ${$country} :)`);
} else {
  console.log(`${$country} does not meet your criteria :)`);
}

switch (language) {
  case "chinese":
  case "mandarian":
    console.log("Most number of native speakers!");
    break;
  case "spanish":
    console.log("2nd plave in number of native speakers");
    break;
  case "English":
    console.log("3rd place in number of native speakers");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  `${$country}'s population is ${$population > 33 ? "above" : "below"} average`
);

// Part 2
function describeCountry($country, $population, $capitalCity) {
  return `${$country} has ${$population} people and its capital city is ${$capitalCity}`;
}

const decSpain = describeCountry("Spain", 30, "Barcelona");

const descEngland = describeCountry("England", 200, "London");

const descUsa = describeCountry("USA", 1100, "WashingtonDC");

console.log(decSpain, descEngland, descUsa);

function percentageOfWorld1($population) {
  return ($population / 7900) * 100;
}

const china = percentageOfWorld1(30);
const spain = percentageOfWorld1(90);
const toronto = percentageOfWorld1(1100);

console.log(china, spain, toronto);

function describePopulation($country, $population) {
  const percentage = percentageOfWorld1($population);
  const description = `${$country} has ${$population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
}

describePopulation("Portugal", 30);
describePopulation("Lille", 90);
describePopulation("Marseille", 1100);

// LEARNING ARRAY
const populations = [220, 300, 450, 30];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
console.log(typeof populations);

let y = 20 + 13;
y += 10;
console.log(y);

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

function bmi(markHeight, markWeight) {
  return markWeight / markHeight ** 2;
}

function bmi2(johnHeight, johnWeight) {
  return johnWeight / johnHeight ** 2;
}

const markBmi = bmi(1.69, 78);
console.log(markBmi);

const johnBmi = bmi2(1.95, 92);
console.log(johnBmi);

console.log(markBmi > johnBmi);

// OR

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);
// console.log(bmiMark > bmiJohn);

const name1 = "Mark";
const name2 = "John";

if (bmiMark > bmiJohn) {
  console.log(
    `${name1}'s BMI ${bmiMark} is heigher than ${name2}'s ${bmiJohn}`
  );
} else {
  console.log(
    `${name2}'s BMI ${bmiMark} is heigher than ${name1}'s ${bmiJohn}`
  );
}

const team1 = "dolphins";
const team2 = "koalas";
const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;

console.log(dolphins, koalas);

// const average = (dolphins + koalas) / 2;

// console.log(average);

if (dolphins > koalas) {
  console.log(`${team1} won the competition`);
} else {
  console.log(`${team2} won the competition`);
}

const teamDolp = (97 + 112 + 101) / 2;
const teamKoalas = (109 + 95 + 123) / 2;
console.log(teamDolp, teamKoalas);

if (teamKoalas >= 100 && teamDolp >= 100 && teamKoalas > teamDolp) {
  console.log("team koalas won");
} else if (teamDolp >= 100 && teamKoalas >= 100 && teamDolp > teamKoalas) {
  console.log("team dolphins won");
}

const dolphin2 = (97 + 112 + 101) / 3;
const koalas2 = (109 + 95 + 106) / 3;
// const minimumScore = 100;
console.log(dolphin2, koalas2);

if (dolphin2 === koalas2) {
  console.log("match ends with a draw");
}

const day = "frid";

if (day === "monday") {
  console.log("I must go to work");
} else if (day === "tuesday") {
  console.log("Executing already written codes");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Champions league and Europa league match days");
} else if (day === "friday") {
  console.log("YAY! TGIF");
} else if (day === "saturday" || day === "sunday") {
  console.log("Premier league day");
} else {
  console.log("Please input a valid day of the week");
}

const tip = (15 / 100) * 275;
console.log(tip);

const bill = 275;

const total = bill + tip;
console.log(total);

bill === 275
  ? console.log(
      `the bill was ${bill}, the tip is ${tip}, and the total value is ${total}`
    )
  : "say something";

// const tip2 = (20 / 100) * 40;
// console.log(tip2);

// OR
const bill2 = 430;
const tip2 =
  bill2 <= 300 && bill2 >= 50 ? bill2 * (15 / 100) : bill2 * (20 / 100);
console.log(
  `the bill was ${bill2}, the tip is ${tip2}, and the total value is ${
    tip2 + bill2
  }`
);
