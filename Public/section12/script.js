"use strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Akinjare Toluwase Matthew",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2023-06-12T18:49:59.371Z",
    "2023-06-02T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  //   const nowDay = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   const hour = `${date.getHours()}`.padStart(2, 0);
  //   const minute = `${date.getMinutes()}`.padStart(2, 0);
  //   return `${nowDay}/${month}/${year}, ${hour}:${minute}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatedMov = formatCurrrency(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, _, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrrency(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //  When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = " Login to get started";
      containerApp.style.opacity = 0;
    }

    // Decrease 1second
    time--;
  };
  // Set time to 5 seconds
  let time = 10 * 60;
  // Call te timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const now = new Date();
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
//   weekday: "long",
// };

// Getting local from browser
// const locale = navigator.language;
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  //   console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Current date and time
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      //   weekday: "long",
    };

    // Getting local from browser
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Adding the date transfer
    currentAccount.movementsDates.push(new Date());
    receiverAcc.movementsDates.push(new Date());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add deate
      currentAccount.movementsDates.push(new Date());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// conversion
console.log(+"78");

// Parsing
// They are global functions
console.log(Number.parseInt("40px"));
console.log(Number.parseFloat("3.6rem"));

// the NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20px"));

// A better method
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20px"));
console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(20));

// USING THE MATH OPERATOR

// The square root method
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// The max method
console.log(Math.max(2, 4, 33, 4, 44));
console.log(Math.max(2, 4, "33px", 4, 44));
console.log(Math.max(2, 4, "33rem", 4, 44));

// the min method
console.log(Math.min(2, 4, 33, 4, 44));

// Using the Constant
// Calculating the area of a function
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// Generating random int btwn 2 values
// Math.random gives a number btwn 0 and 1
// Now multipy it by max - min
// we add min to both sides
// then cancel (-min + min)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(1, 10));

// Rounding Integers
// They all do type coersion
console.log(Math.round(23.654));
console.log(Math.ceil(23.654));
console.log(Math.floor(23.654));

// Rounding Decimals
/* BtS -- JS does boxing because primitives dont have mentods and this is done
by JS transfering the number to an object the call the method on the object 
and when operation is finished it converts it back to a primitive
*/
console.log((5.4).toFixed(0)); /*<--- It always returns a string*/
console.log((5.4).toFixed(3));
console.log(+(5.4343).toFixed(3));

// The Remainder Operator
console.log(10 % 2);
console.log(10 % 3);

const isEven = (n) => n % 2 === 0;
console.log(isEven(10));
console.log(isEven(9));

// Numeric Seperators
// Formating of Numbers
const diameter = 287_460_000_000;
console.log(diameter);

// BigIntegrals
/*Out of the 64bits for the representation of Numbers, only 53 are actually 
used for the storage of Numbers. The rest are for storing position of decimals
and signs.
*/
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 120);

// Using the BigInt
console.log(328373377736464882999837377273766464556637828n);
console.log(BigInt(32837337773646488299983));

// Operations
console.log(200000n * 2999303n);

// cannor mix BigInt with other types
const huge = 234567854376473893n;
const num = 34;
console.log(huge * BigInt(num));

// Exceptions
console.log(30n > num);
console.log(50n === num);
console.log(40n == num);

console.log(huge + " is really huge");

// Divisons
console.log(12n / 3n);
console.log(11 / 3);

// CREATINg dATE IN JS
// UTC <---- UNIVERSAL TIME COORDINATED or Z
const day = new Date();
console.log(day);

console.log(new Date(0));
console.log(
  new Date(3 * 24 * 60 * 60 * 1000)
); /*<---- Converting from days to milliseconds*/
console.log(3 * 24 * 60 * 60 * 1000); /*<---- The time stamp*/

// Working with dates
const future = new Date(2033, 11, 18, 2, 22);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2018481720000));

// To get current time stamp
console.log(Date.now());

console.log(new Date(1686684049131));

future.setFullYear(3033);
console.log(future);

// Calculations with dates
const calcDaysPassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24);

const day1 = calcDaysPassed(new Date(2023, 4, 12), new Date(2023, 4, 34));
console.log(day1);

// Number Formatter
const number = 23345000;
const option = {
  style: "currency",
  unit: "celsius",
  currency: "NGN",
};

console.log("US:", new Intl.NumberFormat("en-US", option).format(number));
console.log("Germany:", new Intl.NumberFormat("de-DE", option).format(number));
console.log("SYRIA:", new Intl.NumberFormat("ar-SY", option).format(number));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, option).format(number)
);

// SETIMEOUT FUNCTION
const teachers = ["Mr Tunde", "Mr Godson"];
const teacherTimer = setTimeout(
  (man1, man2) => console.log(`Here I am, ${man1} and ${man2}`),
  5000,
  ...teachers
);

if (teachers.includes("Mr Tunde")) clearTimeout(teacherTimer);

// SETINTERVAL FUNCTION
setInterval(function () {
  const today = new Date();
  console.log(today);
}, 5000);
