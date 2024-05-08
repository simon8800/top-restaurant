"use strict";
(self["webpackChunktop_restaurant"] = self["webpackChunktop_restaurant"] || []).push([["main"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");


function createContact() {
  const contactContainer = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__.createContainer)();
  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Contact";

  const telephoneInfo = document.createElement("p");
  telephoneInfo.textContent = "Telephone: 8-888-888-8888";

  const emailInfo = document.createElement("p");
  emailInfo.textContent = "Email: pearlflavor@email.com";

  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(telephoneInfo);
  contactContainer.appendChild(emailInfo);
  return contactContainer;
}


/***/ }),

/***/ "./src/elementFactory.js":
/*!*******************************!*\
  !*** ./src/elementFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContainer: () => (/* binding */ createContainer)
/* harmony export */ });
function createContainer() {
  let container = document.createElement("div");
  container.classList.add("container");
  return container;
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");


// Create about container

function createHome() {
  const aboutContainer = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__.createContainer)();

  const restaurantHeader = document.createElement("h1");
  restaurantHeader.textContent = "Pearl Flavors";

  const aboutHeader = document.createElement("h2");
  aboutHeader.textContent = "About";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.innerHTML = `At Pearl Flavors, we invite you to embark on a sensory journey through the vibrant and aromatic world of Cantonese cuisine. Our name pays homage to the exquisite flavors that have emerged from the legendary Pearl River Delta region, where this iconic culinary tradition has flourished for centuries. Step into our modern and inviting space, where the tantalizing aromas of classic Cantonese spices and herbs will immediately transport you to the bustling streets of Guangzhou.
<br><br>Our talented chefs have mastered the art of harmonizing the quintessential flavors of this region, expertly balancing the delicate interplay of sweet, sour, savory, and umami notes. From the delicate artistry of our dim sum offerings, infused with the fragrant notes of ginger, scallions, and cilantro, to the robust wok-tossed specialties bursting with the aromatic medley of garlic, star anise, and soy sauce, Pearl Flavors celebrates the essence of Cantonese flavors with passion and authenticity. Savor the tender textures and intricate flavors of our signature dishes, each meticulously crafted using time-honored techniques and the finest, locally-sourced ingredients.`;

  aboutContainer.appendChild(restaurantHeader);
  aboutContainer.appendChild(aboutHeader);
  aboutContainer.appendChild(aboutParagraph);

  // Create hours container
  const hoursContainer = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__.createContainer)();

  const hoursHeader = document.createElement("h2");
  hoursHeader.textContent = "Hours";

  const hoursList = document.createElement("ul");

  const hours = {
    Sunday: "11:00 - 1:00",
    Monday: "12:00 - 23:00",
    Tuesday: "12:00 - 23:00",
    Wednesday: "12:00 - 23:00",
    Thursday: "12:00 - 23:00",
    Friday: "12:00 - 23:00",
    Saturday: "11:00 - 1:00",
  };

  for (let day in hours) {
    let dayItem = document.createElement("li");
    dayItem.innerText = `${day}: ${hours[day]}`;
    hoursList.appendChild(dayItem);
  }

  hoursContainer.appendChild(hoursHeader);
  hoursContainer.appendChild(hoursList);

  // Create home container
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(aboutContainer);
  home.appendChild(hoursList);

  return home;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




// Get content container
const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

homeBtn.onclick = function () {
  content.innerHTML = "";
  content.appendChild(home);
};

menuBtn.onclick = function () {
  content.innerHTML = "";
  content.appendChild(menu);
};

contactBtn.onclick = function () {
  content.innerHTML = "";
  content.appendChild(contact);
};

const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();

content.appendChild(home);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");


let lunchMenu = [
  {
    item: "Lap Cheung Chow Mein (Wok-Tossed Noodles with Chinese Sausage)",
    price: 12.95,
  },
  { item: "Beef with Bitter Melon", price: 13.95 },
  { item: "Salted Fish and Chicken Fried Rice", price: 11.95 },
  { item: "Braised Mustard Greens with Oyster Sauce", price: 8.95 },
  {
    item: "Crispy Fried Prawns",
    price: 12.95,
  },
  {
    item: "Barbecue Pork Belly Bites",
    price: 9.95,
  },
  {
    item: "Sauteed Garlic Pea Shoots",
    price: 7.95,
  },
  {
    item: "Hot and Sour Soup",
    price: 6.95,
  },
  {
    item: "Wonton Soup",
    price: 7.95,
  },
];

let dinnerMenu = [
  {
    item: "Peking Duck (Served with Steamed Buns, Plum Sauce)",
    price: 38.95,
  },
  {
    item: "Lobster with Ginger and Scallions",
    price: 42.95,
  },
  {
    item: "Whole Steamed Fish with Black Bean Sauce",
    price: "Market Price",
  },
  {
    item: "Cantonese Roast Duck",
    price: 24.95,
  },
  {
    item: "Beef with Oyster Sauce",
    price: 18.95,
  },
  {
    item: "Seafood Fried Rice",
    price: 16.95,
  },
  {
    item: "Vegetable Chow Mein",
    price: 13.95,
  },
  {
    item: "Mapo Tofu",
    price: 14.95,
  },
];

function createMenu() {
  const menuContainer = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__.createContainer)();
  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Menu";

  const lunchContainer = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__.createContainer)();
  const lunchHeader = document.createElement("h2");
  lunchHeader.textContent = "Lunch";
  const lunchList = document.createElement("ul");
  lunchMenu.forEach((lunchItem) => {
    let lunchListItem = document.createElement("li");
    lunchListItem.textContent = `${lunchItem.item} ${lunchItem.price}`;
    lunchList.appendChild(lunchListItem);
  });

  lunchContainer.appendChild(lunchHeader);
  lunchContainer.appendChild(lunchList);

  const dinnerContainer = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__.createContainer)();
  const dinnerHeader = document.createElement("h2");
  const dinnerList = document.createElement("ul");
  dinnerHeader.textContent = "Dinner";
  dinnerMenu.forEach((dinnerItem) => {
    let dinnerListItem = document.createElement("li");
    dinnerListItem.textContent = `${dinnerItem.item} ${dinnerItem.price}`;
    dinnerList.appendChild(dinnerListItem);
  });
  dinnerContainer.appendChild(dinnerHeader);
  dinnerContainer.appendChild(dinnerList);

  menuContainer.appendChild(menuHeader);
  menuContainer.appendChild(lunchContainer);
  menuContainer.appendChild(dinnerContainer);

  return menuContainer;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7O0FBRXBDO0FBQ2YsMkJBQTJCLGdFQUFlO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7OztBQ053Qjs7QUFFbkQ7O0FBRWU7QUFDZix5QkFBeUIsZ0VBQWU7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGdFQUFlOztBQUV4QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUksSUFBSSxXQUFXO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RGdDO0FBQ007QUFDTjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLGlEQUFVO0FBQ3ZCLGdCQUFnQixvREFBYTtBQUM3QixhQUFhLGlEQUFVOztBQUV2Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzdCbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILElBQUksOENBQThDO0FBQ2xELElBQUksMERBQTBEO0FBQzlELElBQUksK0RBQStEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlO0FBQ2Ysd0JBQXdCLGdFQUFlO0FBQ3ZDO0FBQ0E7O0FBRUEseUJBQXlCLGdFQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCLEVBQUUsZ0JBQWdCO0FBQ3JFO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLDBCQUEwQixnRUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQixFQUFFLGlCQUFpQjtBQUN4RTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9lbGVtZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVyIH0gZnJvbSBcIi4vZWxlbWVudEZhY3RvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcigpO1xuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgY29uc3QgdGVsZXBob25lSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZWxlcGhvbmVJbmZvLnRleHRDb250ZW50ID0gXCJUZWxlcGhvbmU6IDgtODg4LTg4OC04ODg4XCI7XG5cbiAgY29uc3QgZW1haWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVtYWlsSW5mby50ZXh0Q29udGVudCA9IFwiRW1haWw6IHBlYXJsZmxhdm9yQGVtYWlsLmNvbVwiO1xuXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGVsZXBob25lSW5mbyk7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxJbmZvKTtcbiAgcmV0dXJuIGNvbnRhY3RDb250YWluZXI7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVDb250YWluZXIoKSB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ29udGFpbmVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250YWluZXIgfSBmcm9tIFwiLi9lbGVtZW50RmFjdG9yeVwiO1xuXG4vLyBDcmVhdGUgYWJvdXQgY29udGFpbmVyXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGFib3V0Q29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCk7XG5cbiAgY29uc3QgcmVzdGF1cmFudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcmVzdGF1cmFudEhlYWRlci50ZXh0Q29udGVudCA9IFwiUGVhcmwgRmxhdm9yc1wiO1xuXG4gIGNvbnN0IGFib3V0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBhYm91dEhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcblxuICBjb25zdCBhYm91dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhYm91dFBhcmFncmFwaC5pbm5lckhUTUwgPSBgQXQgUGVhcmwgRmxhdm9ycywgd2UgaW52aXRlIHlvdSB0byBlbWJhcmsgb24gYSBzZW5zb3J5IGpvdXJuZXkgdGhyb3VnaCB0aGUgdmlicmFudCBhbmQgYXJvbWF0aWMgd29ybGQgb2YgQ2FudG9uZXNlIGN1aXNpbmUuIE91ciBuYW1lIHBheXMgaG9tYWdlIHRvIHRoZSBleHF1aXNpdGUgZmxhdm9ycyB0aGF0IGhhdmUgZW1lcmdlZCBmcm9tIHRoZSBsZWdlbmRhcnkgUGVhcmwgUml2ZXIgRGVsdGEgcmVnaW9uLCB3aGVyZSB0aGlzIGljb25pYyBjdWxpbmFyeSB0cmFkaXRpb24gaGFzIGZsb3VyaXNoZWQgZm9yIGNlbnR1cmllcy4gU3RlcCBpbnRvIG91ciBtb2Rlcm4gYW5kIGludml0aW5nIHNwYWNlLCB3aGVyZSB0aGUgdGFudGFsaXppbmcgYXJvbWFzIG9mIGNsYXNzaWMgQ2FudG9uZXNlIHNwaWNlcyBhbmQgaGVyYnMgd2lsbCBpbW1lZGlhdGVseSB0cmFuc3BvcnQgeW91IHRvIHRoZSBidXN0bGluZyBzdHJlZXRzIG9mIEd1YW5nemhvdS5cbjxicj48YnI+T3VyIHRhbGVudGVkIGNoZWZzIGhhdmUgbWFzdGVyZWQgdGhlIGFydCBvZiBoYXJtb25pemluZyB0aGUgcXVpbnRlc3NlbnRpYWwgZmxhdm9ycyBvZiB0aGlzIHJlZ2lvbiwgZXhwZXJ0bHkgYmFsYW5jaW5nIHRoZSBkZWxpY2F0ZSBpbnRlcnBsYXkgb2Ygc3dlZXQsIHNvdXIsIHNhdm9yeSwgYW5kIHVtYW1pIG5vdGVzLiBGcm9tIHRoZSBkZWxpY2F0ZSBhcnRpc3RyeSBvZiBvdXIgZGltIHN1bSBvZmZlcmluZ3MsIGluZnVzZWQgd2l0aCB0aGUgZnJhZ3JhbnQgbm90ZXMgb2YgZ2luZ2VyLCBzY2FsbGlvbnMsIGFuZCBjaWxhbnRybywgdG8gdGhlIHJvYnVzdCB3b2stdG9zc2VkIHNwZWNpYWx0aWVzIGJ1cnN0aW5nIHdpdGggdGhlIGFyb21hdGljIG1lZGxleSBvZiBnYXJsaWMsIHN0YXIgYW5pc2UsIGFuZCBzb3kgc2F1Y2UsIFBlYXJsIEZsYXZvcnMgY2VsZWJyYXRlcyB0aGUgZXNzZW5jZSBvZiBDYW50b25lc2UgZmxhdm9ycyB3aXRoIHBhc3Npb24gYW5kIGF1dGhlbnRpY2l0eS4gU2F2b3IgdGhlIHRlbmRlciB0ZXh0dXJlcyBhbmQgaW50cmljYXRlIGZsYXZvcnMgb2Ygb3VyIHNpZ25hdHVyZSBkaXNoZXMsIGVhY2ggbWV0aWN1bG91c2x5IGNyYWZ0ZWQgdXNpbmcgdGltZS1ob25vcmVkIHRlY2huaXF1ZXMgYW5kIHRoZSBmaW5lc3QsIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50cy5gO1xuXG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRIZWFkZXIpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEhlYWRlcik7XG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0UGFyYWdyYXBoKTtcblxuICAvLyBDcmVhdGUgaG91cnMgY29udGFpbmVyXG4gIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCk7XG5cbiAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuXG4gIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBjb25zdCBob3VycyA9IHtcbiAgICBTdW5kYXk6IFwiMTE6MDAgLSAxOjAwXCIsXG4gICAgTW9uZGF5OiBcIjEyOjAwIC0gMjM6MDBcIixcbiAgICBUdWVzZGF5OiBcIjEyOjAwIC0gMjM6MDBcIixcbiAgICBXZWRuZXNkYXk6IFwiMTI6MDAgLSAyMzowMFwiLFxuICAgIFRodXJzZGF5OiBcIjEyOjAwIC0gMjM6MDBcIixcbiAgICBGcmlkYXk6IFwiMTI6MDAgLSAyMzowMFwiLFxuICAgIFNhdHVyZGF5OiBcIjExOjAwIC0gMTowMFwiLFxuICB9O1xuXG4gIGZvciAobGV0IGRheSBpbiBob3Vycykge1xuICAgIGxldCBkYXlJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGRheUl0ZW0uaW5uZXJUZXh0ID0gYCR7ZGF5fTogJHtob3Vyc1tkYXldfWA7XG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGRheUl0ZW0pO1xuICB9XG5cbiAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpO1xuICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xuXG4gIC8vIENyZWF0ZSBob21lIGNvbnRhaW5lclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICBob21lLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xuXG4gIHJldHVybiBob21lO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG4vLyBHZXQgY29udGVudCBjb250YWluZXJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG5cbmhvbWVCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xufTtcblxubWVudUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG59O1xuXG5jb250YWN0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcbn07XG5cbmNvbnN0IGhvbWUgPSBjcmVhdGVIb21lKCk7XG5jb25zdCBjb250YWN0ID0gY3JlYXRlQ29udGFjdCgpO1xuY29uc3QgbWVudSA9IGNyZWF0ZU1lbnUoKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRhaW5lciB9IGZyb20gXCIuL2VsZW1lbnRGYWN0b3J5XCI7XG5cbmxldCBsdW5jaE1lbnUgPSBbXG4gIHtcbiAgICBpdGVtOiBcIkxhcCBDaGV1bmcgQ2hvdyBNZWluIChXb2stVG9zc2VkIE5vb2RsZXMgd2l0aCBDaGluZXNlIFNhdXNhZ2UpXCIsXG4gICAgcHJpY2U6IDEyLjk1LFxuICB9LFxuICB7IGl0ZW06IFwiQmVlZiB3aXRoIEJpdHRlciBNZWxvblwiLCBwcmljZTogMTMuOTUgfSxcbiAgeyBpdGVtOiBcIlNhbHRlZCBGaXNoIGFuZCBDaGlja2VuIEZyaWVkIFJpY2VcIiwgcHJpY2U6IDExLjk1IH0sXG4gIHsgaXRlbTogXCJCcmFpc2VkIE11c3RhcmQgR3JlZW5zIHdpdGggT3lzdGVyIFNhdWNlXCIsIHByaWNlOiA4Ljk1IH0sXG4gIHtcbiAgICBpdGVtOiBcIkNyaXNweSBGcmllZCBQcmF3bnNcIixcbiAgICBwcmljZTogMTIuOTUsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkJhcmJlY3VlIFBvcmsgQmVsbHkgQml0ZXNcIixcbiAgICBwcmljZTogOS45NSxcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiU2F1dGVlZCBHYXJsaWMgUGVhIFNob290c1wiLFxuICAgIHByaWNlOiA3Ljk1LFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJIb3QgYW5kIFNvdXIgU291cFwiLFxuICAgIHByaWNlOiA2Ljk1LFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJXb250b24gU291cFwiLFxuICAgIHByaWNlOiA3Ljk1LFxuICB9LFxuXTtcblxubGV0IGRpbm5lck1lbnUgPSBbXG4gIHtcbiAgICBpdGVtOiBcIlBla2luZyBEdWNrIChTZXJ2ZWQgd2l0aCBTdGVhbWVkIEJ1bnMsIFBsdW0gU2F1Y2UpXCIsXG4gICAgcHJpY2U6IDM4Ljk1LFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJMb2JzdGVyIHdpdGggR2luZ2VyIGFuZCBTY2FsbGlvbnNcIixcbiAgICBwcmljZTogNDIuOTUsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIldob2xlIFN0ZWFtZWQgRmlzaCB3aXRoIEJsYWNrIEJlYW4gU2F1Y2VcIixcbiAgICBwcmljZTogXCJNYXJrZXQgUHJpY2VcIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiQ2FudG9uZXNlIFJvYXN0IER1Y2tcIixcbiAgICBwcmljZTogMjQuOTUsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkJlZWYgd2l0aCBPeXN0ZXIgU2F1Y2VcIixcbiAgICBwcmljZTogMTguOTUsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIlNlYWZvb2QgRnJpZWQgUmljZVwiLFxuICAgIHByaWNlOiAxNi45NSxcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiVmVnZXRhYmxlIENob3cgTWVpblwiLFxuICAgIHByaWNlOiAxMy45NSxcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiTWFwbyBUb2Z1XCIsXG4gICAgcHJpY2U6IDE0Ljk1LFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcigpO1xuICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgY29uc3QgbHVuY2hDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoKTtcbiAgY29uc3QgbHVuY2hIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGx1bmNoSGVhZGVyLnRleHRDb250ZW50ID0gXCJMdW5jaFwiO1xuICBjb25zdCBsdW5jaExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGx1bmNoTWVudS5mb3JFYWNoKChsdW5jaEl0ZW0pID0+IHtcbiAgICBsZXQgbHVuY2hMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsdW5jaExpc3RJdGVtLnRleHRDb250ZW50ID0gYCR7bHVuY2hJdGVtLml0ZW19ICR7bHVuY2hJdGVtLnByaWNlfWA7XG4gICAgbHVuY2hMaXN0LmFwcGVuZENoaWxkKGx1bmNoTGlzdEl0ZW0pO1xuICB9KTtcblxuICBsdW5jaENvbnRhaW5lci5hcHBlbmRDaGlsZChsdW5jaEhlYWRlcik7XG4gIGx1bmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGx1bmNoTGlzdCk7XG5cbiAgY29uc3QgZGlubmVyQ29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCk7XG4gIGNvbnN0IGRpbm5lckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgZGlubmVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgZGlubmVySGVhZGVyLnRleHRDb250ZW50ID0gXCJEaW5uZXJcIjtcbiAgZGlubmVyTWVudS5mb3JFYWNoKChkaW5uZXJJdGVtKSA9PiB7XG4gICAgbGV0IGRpbm5lckxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGRpbm5lckxpc3RJdGVtLnRleHRDb250ZW50ID0gYCR7ZGlubmVySXRlbS5pdGVtfSAke2Rpbm5lckl0ZW0ucHJpY2V9YDtcbiAgICBkaW5uZXJMaXN0LmFwcGVuZENoaWxkKGRpbm5lckxpc3RJdGVtKTtcbiAgfSk7XG4gIGRpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaW5uZXJIZWFkZXIpO1xuICBkaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlubmVyTGlzdCk7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChsdW5jaENvbnRhaW5lcik7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlubmVyQ29udGFpbmVyKTtcblxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==