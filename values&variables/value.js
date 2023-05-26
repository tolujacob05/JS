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
