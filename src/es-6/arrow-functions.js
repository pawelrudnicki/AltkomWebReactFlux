const hello = () => console.log('Cześć');

const greetings = (name, name2) => console.log(`Cześć ${name} oraz ${name2}`);

const manyArguments = (a, b) => a + b;
const result = manyArguments(2, 2);


const multilineComputation = name => {
    const nameToUpper = name.toUpperCase();
    const luckyNumber = Math.floor(Math.random() * 100);
    return `Hello ${nameToUpper} your lucky number is ${luckyNumber}.`;
};

const returnEmptyArray = () => {
    return [];
};

const returnEmptyArrayOneLine = () => [];

class Cat {

    constructor(name) {
        this.name = name;
        this.meow = this.meow.bind(this);
    }

    meow() {
        function run() {
            console.log(`Miauuu, tutaj ${this.name}`);
        }
        run();
    }

    arrowMeow() {
        const run = () => {
            console.log(`Miauu, tutaj ${this.name}`);
        }
        run();
    }
}

const cat = new Cat("Mruczek");
cat.meow();
