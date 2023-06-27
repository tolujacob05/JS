// Importing module

// IMPORT WAY 1
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

console.log("Importing module");

import { log } from "console";
// addToCart("bread", 5);
// console.log(price, tq);

// IMPORT WAY 2
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 3);

// IMPORT WAY 3
// import add, { cart } from "./shoppingCart.js";
// add("wine", 9);
// console.log(cart);

// COMMON JS
// import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
// state.user.loggedIn = false;

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);

// class Person {
//   greeting = "hey";
//   constructor(name) {
//     this.name = name;
//     console.log();
//   }
// }
