import $ from 'jquery';

const firstName: string = 'Heather';

const states: number = 50;

const val = 4 + 5;

console.log(val);

function SayHello(options: { greeting: string }) {
    alert(options.greeting);
}

SayHello({
    greeting: 'Hello World!!! From: TypeScript'
});

///

function CheckAge(name: string, age: number) {
    if (age < 21) {
        alert(`Sorry ${name} you aren't old enough to view this page!`);
    } else {
        alert(`Welcome ${name}`);
    }
}

CheckAge('Charles', 21);
CheckAge('Abby', 27);
CheckAge('James', 18);
CheckAge('John', 17);

///

let favVeggie = ['squash', 'artichokes', 'brussel sprouts', 'asparagus'];

for (var i = 0; i < favVeggie.length; i++) {
    alert(favVeggie[i]);
}

///

interface Person {
    name: string;
    age: number;
}

let person1: Person = {
    name: 'Heather',
    age: 47
};
let person2: Person = {
    name: 'Kenneth',
    age: 47
};
let person3: Person = {
    name: 'Caroline',
    age: 19
};
let person4: Person = {
    name: 'Reid',
    age: 17
};
let person5: Person = {
    name: 'Davis',
    age: 13
};

let people: Array<Person> = [person1, person2, person3, person4, person5];

for (let i: number = 0; i < people.length; i++) {
    CheckAge(people[i].name, people[i].age);
}

function GetLength(word: string) {
    return word.length;
}

function isEven(glNumber: number) {
    if (glNumber % 2 === 0) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
}

let wordLength = GetLength('Hello world');
isEven(wordLength);

let wordLength2 = GetLength(firstName);
isEven(wordLength2);

isEven(states);
