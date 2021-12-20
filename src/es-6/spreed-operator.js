const fruits = ['apple', 'banana', 'pear'];
const vegetables = ['carrot', 2];

const combineWithSpread = [...fruits, ...vegetables];

const shallowFruitsCopy = [...fruits];

console.log(fruits);
console.log(shallowFruitsCopy);

console.log(fruits === fruits);
console.log(shallowFruitsCopy === fruits);

const cat = {name: "Mruczek", breed: "Persian"};
const additionalCatParameters = {isBig: true, name: "Mruczek2"};
const cat2 = {...additionalCatParameters, ...cat};
console.log(cat2);
