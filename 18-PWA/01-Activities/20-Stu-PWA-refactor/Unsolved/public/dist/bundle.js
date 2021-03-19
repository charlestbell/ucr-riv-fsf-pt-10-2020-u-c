/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/js/app.js":
/*!*********************************!*\
  !*** ./public/assets/js/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ./cardCreation.js */ \"./public/assets/js/cardCreation.js\"),\n    createCards = _require.createCards;\n\nloadImages();\n\nfunction loadImages() {\n  fetch(\"http://localhost:3000/api/images\").then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    return createCards(data);\n  });\n}\n\n//# sourceURL=webpack:///./public/assets/js/app.js?");

/***/ }),

/***/ "./public/assets/js/cardCreation.js":
/*!******************************************!*\
  !*** ./public/assets/js/cardCreation.js ***!
  \******************************************/
/*! exports provided: createCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCards\", function() { return createCards; });\nvar _require = __webpack_require__(/*! ./rating.js */ \"./public/assets/js/rating.js\"),\n    createRatingForm = _require.createRatingForm;\n\nfunction createCards(data) {\n  console.log(document.getElementsByClassName(\"container\"));\n  var container = document.getElementsByClassName(\"container\")[0];\n  container.innerHTML = \"\";\n  var lastRow;\n  var row = createEl(\"div\", \"row\");\n  return data.forEach(function (image, index) {\n    var col = createEl(\"div\", \"col-md-4 mt-4\");\n    col.appendChild(createCard(image));\n\n    if (index % 3 === 0) {\n      row.appendChild(col);\n      container.appendChild(row);\n      lastRow = row;\n    }\n\n    return lastRow.appendChild(col);\n  });\n}\n\nfunction createCard(image) {\n  var card = createEl(\"div\", \"card\");\n  var imageContainer = createEl(\"div\", \"card__image-container\");\n  var img = createEl(\"img\", \"card-img-top card__image--cover\");\n  img.setAttribute(\"src\", image.image);\n  img.setAttribute(\"alt\", image.description);\n  var cardBody = createEl(\"div\", \"card-body\");\n  var ratingFormContainer = createEl(\"div\", \"rating d-flex justify-content-start\");\n  ratingFormContainer.setAttribute(\"data-id\", image._id);\n  ratingFormContainer.setAttribute(\"data-rating\", image.rating);\n  var ratingForm = createRatingForm(image);\n  var cardText = createEl(\"p\", \"card-text font-weight-bold mt-2\");\n  cardText.innerText = \"\".concat(image.description, \" (\").concat(image.rating, \")\");\n  imageContainer.append(img);\n  ratingFormContainer.append(ratingForm);\n  cardBody.appendChild(ratingFormContainer);\n  cardBody.appendChild(cardText);\n  card.appendChild(imageContainer);\n  card.appendChild(cardBody);\n  return card;\n}\n\nfunction createEl() {\n  var htmlString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var className = arguments.length > 1 ? arguments[1] : undefined;\n  var el = document.createElement(htmlString);\n\n  if (className) {\n    el.setAttribute(\"class\", className);\n  }\n\n  return el;\n}\n\n//# sourceURL=webpack:///./public/assets/js/cardCreation.js?");

/***/ }),

/***/ "./public/assets/js/rating.js":
/*!************************************!*\
  !*** ./public/assets/js/rating.js ***!
  \************************************/
/*! exports provided: updateRating, createRatingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateRating\", function() { return updateRating; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRatingForm\", function() { return createRatingForm; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction updateRating(event) {\n  var _event$currentTarget$ = event.currentTarget.getAttribute(\"for\").split(\"-\"),\n      _event$currentTarget$2 = _slicedToArray(_event$currentTarget$, 3),\n      id = _event$currentTarget$2[0],\n      rating = _event$currentTarget$2[2];\n\n  fetch(\"http://localhost:3000/api/images/\".concat(id), {\n    method: \"PUT\",\n    body: JSON.stringify({\n      rating: rating\n    }),\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function () {\n    loadImages();\n  });\n}\nfunction createRatingForm(image) {\n  var labelText = {\n    1: \"One Star\",\n    2: \"Two Stars\",\n    3: \"Three Stars\",\n    4: \"Four Stars\",\n    5: \"Five Stars\"\n  };\n  var form = createEl(\"form\");\n  form.setAttribute(\"action\", \"post\");\n\n  for (var i = 1; i <= 5; i++) {\n    var input = createEl(\"input\", \"visuallyhidden\");\n    input.setAttribute(\"type\", \"radio\");\n    input.setAttribute(\"name\", \"rating\");\n    input.setAttribute(\"id\", \"\".concat(image._id, \"-star-\").concat(i));\n    input.setAttribute(\"value\", i);\n    var label = createEl(\"label\");\n    label.setAttribute(\"for\", \"\".concat(image._id, \"-star-\").concat(i));\n    var labelSpan = createEl(\"span\", \"visuallyhidden\");\n    labelSpan.innerText = labelText[i];\n    var star = createEl(\"i\", \"fa-star \".concat(image.rating >= i ? \"fas\" : \"far\"));\n    label.appendChild(labelSpan);\n    label.appendChild(star);\n    label.onclick = updateRating;\n    form.appendChild(input);\n    form.appendChild(label);\n  }\n\n  return form;\n}\n\n//# sourceURL=webpack:///./public/assets/js/rating.js?");

/***/ })

/******/ });