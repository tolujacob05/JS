// Exporting modules
console.log("Exporting module");

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   //   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// lastPost.then((last) => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

/*
const shoppingCart2 = (function () {
  const shippingCost2 = 10;
  const cart2 = [];
  const totalPrice2 = 237;
  const totalQuantity2 = 23;

  const addToCart2 = function (product, quantity) {
    cart2.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (produnct, quantity) {
    console.log(`${quantity} ${produnct} ordered from supplier`);
  };

  return {
    addToCart2,
    orderStock,
    cart2,
    totalPrice2,
    totalQuantity2,
  };
})();

shoppingCart2.addToCart2("banana", 5);
shoppingCart2.addToCart2("apple", 5);
shoppingCart2.addToCart2("strawberry", 5);
console.log(shoppingCart2.cart2);

*/
