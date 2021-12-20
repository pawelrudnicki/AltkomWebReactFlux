const simpleExampleObject = {hello: "World", goodbye: "Universe", user: ""};

const hello = simpleExampleObject.hello;

const {goodbye} = simpleExampleObject;

const {user: {name: {test} = {}}} = simpleExampleObject;

const fruits = ['apple', 'banana', 'mango', 'cherry'];
const banana = fruits[1];

// let [myApple, myBanana] = fruits;

let [, myBanana] = fruits;

const inDoorAPI = {
    fridge: {
        manufacturer: 'Samsung',
        model: 'Cooler 291263',
        doors: 3,
        deFrost: true,
        content: ['eggs', 'ham', 'cheese', 'orange juice']
    }
};

// 1 zadanie - wyodrebnij manufacturer
