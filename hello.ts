import $ from 'jquery';

function SayHello(options: { greeting: string }) {
    alert(options.greeting)
};

SayHello({
    greeting: 'Hello World!!! From: TypeScript'
})

///

function CheckAge(options: { name: string, age: number }) {

    if (options.age < 21) {
    alert(`Sorry ${options.name} you aren't old enough to view this page!`)
    } else {
        alert(`Welcome ${options.name}`)
}
}

CheckAge({name: 'Heather', age: 12})

///


let favVeggie = ['squash', 'artichokes', 'brussel sprouts', 'asparagus']




for (var i = 0; i < favVeggie.length; i++) {
    console.log(favVeggie[i]);
}
