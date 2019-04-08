"use strict";
exports.__esModule = true;
var firstName = "Heather";
var states = 50;
var val = 4 + 5;
console.log(val);
function SayHello(options) {
    console.log(options.greeting);
}
SayHello({
    greeting: 'Hello World!!! From: TypeScript'
});
///
function CheckAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + " you aren't old enough to view this page!");
    }
    else {
        console.log("Welcome " + name);
    }
}
CheckAge('Charles', 21);
CheckAge('Abby', 27);
CheckAge('James', 18);
CheckAge('John', 17);
///
var favVeggie = ['squash', 'artichokes', 'brussel sprouts', 'asparagus'];
for (var i = 0; i < favVeggie.length; i++) {
    console.log(favVeggie[i]);
}
var person1 = {
    name: "Heather",
    age: 47
};
var person2 = {
    name: "Kenneth",
    age: 47
};
var person3 = {
    name: "Caroline",
    age: 19
};
var person4 = {
    name: "Reid",
    age: 17
};
var person5 = {
    name: "Davis",
    age: 13
};
var people = [person1, person2, person3, person4, person5];
for (var i_1 = 0; i_1 < people.length; i_1++) {
    CheckAge(people[i_1].name, people[i_1].age);
}
function GetLength(word) {
    return word.length;
}
function isEven(glNumber) {
    if (glNumber % 2 === 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
}
var wordLength = GetLength('Hello world');
console.log(wordLength);
isEven(wordLength);
