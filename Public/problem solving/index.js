"use strict";

// PROBLEM SOLVING

// PROBLEM 1
// // We work for a company buildinga smart home thermometer. Our most
// task is this: 'Given an array of temperatures of one day, calaculate
// the temeprature amplitude. Keep in mind that sometimes there might be
// a sensor error.'

const temeprature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// HOW TO APPROACH THE PROBLEM
// - WHAT IS TEMP AMPLITUDE? This is the difference in between the
// highest and lowest temeprature
// How to compute max and min temperatures?
// -What is a sensor error? And what to do?

// 2. BREAKING UP INTO SUB-PROBLEMS
// -How to find max value in temp array?
//  - How to find min value in temp array?
// - Subtract min value from max valueand return the result
// - How to ignore errors?

//  SOLUTION
// First we create a function

const tempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const currentTemp = temp[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

const amplitude = tempAmplitude(temeprature);
console.log(amplitude);

// PROBLEM 2
// Function should recieve two arrays pf temperatures

// Understanding the problem
//  -With 2 arrays, should we implement functionality
//  twice? NO! Just merge two arrays

// 2. Breaking up into sub-problems
// How to merge two arrays

// DEBUGGING

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    // value: Number(prompt("Degrees celcius:")),
    value: 20,
  };

  //   console.log(measurement);

  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;

  return kelvin;
};

console.log(measureKelvin());

// PROCESSS TO DEBUGGING
// 1. Identify
// 2. find
// 3. fix

// CODING CHALLENGE
/*
    Given an array of forecasted maximum temperatures, the 
    thermometer displays a string with these temperatures.

    Example: [17,21,23] will print '...17°C in 1 days. ..21°C in2 days
    ..23°C in 3 days..'

    create a function 'printForecast' which takes in an array 'arr'
    and logs a string like the above to the console.

    TEST DATA 1: [17,21,23]
    TEST DATA 2: [12,5,-5,0,4]
*/

// SOLUTION
// Problem 1
// Create an array that returns the string
// Merge the array

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const data3 = data1.concat(data2);
console.log(data3);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    // console.log(String(`${arr[i]}°C in ${[i + 1]} days...`));
    str += `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log("..." + str);
  //   console.log(typeof str);
};

printForecast(data3);

const needle = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.indexOf("needle")) {
      return `found needle at position` + haystack.indexOf("needle");
    }
  }
}

console.log(findNeedle(needle));

// To Check for grades
function getGrade(s1, s2, s3) {
  let mark = [s1, s2, s3];
  let sum = 0;
  for (let i = 0; i < mark.length; i++) {
    sum += mark[i];
  }
  const average = sum / mark.length;
  if (average < 60) {
    return "F";
  } else if (average <= 70) {
    return "D";
  } else if (average <= 80) {
    return "C";
  } else if (average <= 90) {
    return "B";
  } else {
    return "A";
  }
}

console.log(getGrade(30, 30, 100));

// SQUARING AND ADDITION OF NUM

function squareSum(numbers) {
  let square = numbers.reduce((acc, curVal) => {
    return acc + curVal ** 2;
  }, 0);
  return square;
}

const nested = [2, 5, 5, [6, 1, 5]];
console.log(nested);

const [a, , , j] = nested;
console.log(a, j);

const starterMenu = ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"];
const mainMenu = ["Pizza", "Pasta", "Risotto"];
const newArray = starterMenu.concat(mainMenu);

console.log(newArray);

console.log("jonas" && "0");

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

const [gk1, ...fieldPlayers1] = [...game.players[0]];
const [gk2, ...fieldPlayers2] = [...game.players[1]];

console.log(gk1, gk2, fieldPlayers1, fieldPlayers2);

const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

const players1Final = [...game.players[0], "Thiage", "Coutinho", "Perisic"];

console.log(players1Final);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// const bayern = 4;
// const Dortmund = 0;

team1 < team2 && console.log("team1 is likely to win the match");
team1 > team2 && console.log("team2 is likely to win the match");

for (const [i, el] of allPlayers.entries()) {
  console.log(`${i + 1}: ${el}`);
}

for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;

console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
const eKey = new Set(gameEvents.keys());
console.log(events);
console.log(eKey);

console.log(gameEvents.delete(64));
console.log(gameEvents);

for (const [key, value] of gameEvents) {
  // if (key < 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  // else if (key > 45) console.log(`[SECOND HALF] ${key}: ${value}`);
  const half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${key}: ${value}`);
}

// const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

const announcement =
  "Please all passangers \n should go tho the boarding door right now! Boarding door 231";
console.log(announcement.replaceAll("door", "gate"));

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// const camelCase = function (n) {
//   const [a, b] = n.split("_");
//   // const names = [a, b].join("");
//   // console.log(names);
//   for (const newName of [a, b]) {
//     const newCamelCase = a + b[0].toUpperCase() + b.slice(1);
//     console.log(newCamelCase);
//   }
//   // for (const newName of names) {
//   //   const newCamelCase = newName[].toUpperCase() + newName.slice(1);
//   //   console.log(newCamelCase);
//   // }
// };

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, newRow] of rows.entries()) {
    const [a, b] = newRow.toLowerCase().trim().split("_");
    const newCamelCase = a + b[0].toUpperCase() + b.slice(1);
    console.log(`${newCamelCase.padEnd(20)}${"👍🏾".repeat(i + 1)}`);
  }
});

// camelCase("first_name");
// camelCase("last_name");
// camelCase("calculate_age");

// const names = names.spit("");
// console.log("first_name".split("_"));
// console.log("last_name".split("_"));
// console.log("calculate_age".split("_"));
const [first, last] = "james_hilda".split("_");
// const c = n;
console.log(first, last);
const split = first + last[0].toUpperCase() + last.slice(1);
console.log(split);

const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30;`;

const code = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  // console.log(type, from, to, time);
  const all = `${type.startsWith("_Delayed") ? "🛑" : ""}${type.replaceAll(
    "_",
    ""
  )} ${code(from)} ${code(to)} ${time.replaceAll(":", "h")}`.padStart(36);
  console.log(all);
}
