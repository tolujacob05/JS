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
