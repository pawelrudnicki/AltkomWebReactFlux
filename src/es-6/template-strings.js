const cooler = `Super-Freezer-2025`;
const cost = 2300;

const cool = "This is my " + cooler + " - you can buy it for " + cost + " zł";

const templateCool = `This is my ${cooler} - you can buy it for ${cost} zł`;


console.log(templateCool);

function sum2Number(x, y) {
    return x + y;
}

console.log(`Suma 2 + 2 wynosi ${sum2Number(2, 2)}`);

const showName = false;

console.log(`Hello ${showName ? 'John' : 'stranger'}`);

console.log(`Hello ${showName && 'John'}`);