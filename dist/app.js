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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hello.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hello.ts":
/*!******************!*\
  !*** ./hello.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar firstName = 'Heather';\nvar states = 50;\nvar val = 4 + 5;\nconsole.log(val);\nfunction SayHello(options) {\n    alert(options.greeting);\n}\nSayHello({\n    greeting: 'Hello World!!! From: TypeScript'\n});\n///\nfunction CheckAge(name, age) {\n    if (age < 21) {\n        alert(\"Sorry \" + name + \" you aren't old enough to view this page!\");\n    }\n    else {\n        alert(\"Welcome \" + name);\n    }\n}\nCheckAge('Charles', 21);\nCheckAge('Abby', 27);\nCheckAge('James', 18);\nCheckAge('John', 17);\n///\nvar favVeggie = ['squash', 'artichokes', 'brussel sprouts', 'asparagus'];\nfor (var i = 0; i < favVeggie.length; i++) {\n    alert(favVeggie[i]);\n}\nvar person1 = {\n    name: 'Heather',\n    age: 47\n};\nvar person2 = {\n    name: 'Kenneth',\n    age: 47\n};\nvar person3 = {\n    name: 'Caroline',\n    age: 19\n};\nvar person4 = {\n    name: 'Reid',\n    age: 17\n};\nvar person5 = {\n    name: 'Davis',\n    age: 13\n};\nvar people = [person1, person2, person3, person4, person5];\nfor (var i_1 = 0; i_1 < people.length; i_1++) {\n    CheckAge(people[i_1].name, people[i_1].age);\n}\nfunction GetLength(word) {\n    return word.length;\n}\nfunction isEven(glNumber) {\n    if (glNumber % 2 === 0) {\n        console.log('The world is nice and even!');\n    }\n    else {\n        console.log('The world is an odd place!');\n    }\n}\nvar wordLength = GetLength('Hello world');\nisEven(wordLength);\nvar wordLength2 = GetLength(firstName);\nisEven(wordLength2);\nisEven(states);\n\n\n//# sourceURL=webpack:///./hello.ts?");

/***/ })

/******/ });