"strict mode";

const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget = addExpense(budget, spendingLimits, 100, "Pizza 🍕");
console.log(newBudget);

addExpense(100, "Going to movies 🍿", "Matilda");
addExpense(200, "Stuff", "Jay");

// console.log(budget);

const checkExpense = function (state, limits) {
  return state.map((entry) => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry;
  });
  // for (const entry of budget)
  //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = "limit";
};
const finalBudget = checkExpense(newBudget, spendingLimits);

// console.log(finalBudget);

const bigExpenses = function (state, bigLimit) {
  const bigExpense = state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, "");

  console.log(bigExpense);
  // let output = "";
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -limit ? `${entry.description.slice(-2)} +  /` : "";
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

bigExpenses(finalBudget, 100);
