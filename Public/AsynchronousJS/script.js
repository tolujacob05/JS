"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const images = document.querySelector(".images");

///////////////////////////////////////

// OLD SCHOOL WAY OF DING AJAX CALL

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags?.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.altSpellings?.[3]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} million</p>
        <p class="country__row"><span>🗣️</span>${data.languages?.eng}</p>
      <p class="country__row"><span>💰</span>${
        data.currencies?.["NGN"].name
      }</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// // https://restcountries.com/v3.1/name/${country}
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     //   console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     // Get Neighbour country
//     const neighbour = data?.borders[0];

//     if (!neighbour) return;

//     // AJAX CALL NEIGHBOUR COUNTRY
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// // getCountryAndNeighbour("nigeria");
// getCountryAndNeighbour("usa");

// const request = fetch("https://restcountries.com/v3.1/name/nigeria");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (reponse) {
//       console.log(reponse);
//       return reponse.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       renderError(`Something went wrong 😔😔. ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error("No neighbour found!");

//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })

//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       renderError(`Something went wrong 😔😔. ${err.message}. Try again!`);
//     })

//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("usa");
// });

// getCountryData("hdhhsh");

// const whereAmI = function (latt, longt) {
//   fetch(`https://geocode.xyz/${latt},${longt}?geoit=json`)
//     .then(function (response) {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response?.status}`);

//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(function (response) {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => {
//       renderError(`Something went wrong 😔😔. ${err.message}. Try again!`);
//     });
// };

// btn.addEventListener("click", function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// PROMISES
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN 💵");
    } else {
      reject(new Error("Sorry 😔, you lost your bet"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//   PROMISIFIYING SETIMEOUT
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 1 second");
  });

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = function () {
//   getPosition()
//     .then((position) => {
//       const { latitude: lat, longitude: lng } = position.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(function (response) {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response?.status}`);

//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(function (response) {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => {
//       renderError(`Something went wrong 😔😔. ${err.message}. Try again!`);
//     });
// };

// btn.addEventListener("click", whereAmI);

const wait2 = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      images.append(img);
      resolve(img);
    });

    img.addEventListener("load", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

// const imgLoader = function () {
//   createImage("img/img-1.jpg")
//     .then((img) => {
//       currentImg = img;
//       console.log(img);
//       return wait2(2);
//     })
//     .then(() => {
//       currentImg.style.display = "none";
//       return createImage("img/img-2.jpg");
//     })
//     .then((img) => {
//       currentImg = img;
//       console.log("image Loaded");
//       return wait2(2);
//     })
//     .then(() => {
//       currentImg.style.display = "none";
//     })
//     .catch((err) => console.log(err));
// };

// imgLoader();

// ASYNC FUNCTION
const getPosition2 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const position = await getPosition2();
    const { latitude: lat, longitude: lng } = position.coords;
    const response = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!response.ok) throw new Error("Problem getting location data");

    const dataGeo = await response.json();
    console.log(dataGeo);

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error("Problem getting country");

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    renderError(`😔 ${err.message}`);
  }
};

whereAmI("");
console.log("FIRST");

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

get3Countries("nigeria", "usa", "gb");

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/peru`),
    getJSON(`https://restcountries.com/v3.1/name/us`),
    getJSON(`https://restcountries.com/v3.1/name/nigeria`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took to long"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/peru`),
  timeout(0.2),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.log(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve("success"),
  Promise.reject("success"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Promise.any[ES2021]
Promise.any([
  Promise.resolve("success"),
  Promise.reject("success"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const imgLoader = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    await wait2(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    console.log("image Loaded");
    await wait2(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err.message);
  }
};

imgLoader();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const allImg = await Promise.all(imgs);
    console.log(allImg);
    allImg.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};

console.log(loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]));
