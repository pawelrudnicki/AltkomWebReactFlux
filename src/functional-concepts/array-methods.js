const myNumbersArray = [1, 2, 33, 44, 55, 3, 1];

myNumbersArray.forEach((element, index) => {
    // console.log(`Pozycja elementu: ${index} - element: ${element}`);
});

const mapped = myNumbersArray.map((element) => `Chapter #${element}`);
// console.log(mapped);

const filteredNumbers = myNumbersArray.filter((element) => element % 2 === 0);
// console.log(filteredNumbers);

const everyNumbers = myNumbersArray.every((element) => element > 10);
// console.log(everyNumbers);
const someNumbers = myNumbersArray.some((element) => element > 10);
// console.log(someNumbers);

const mutableArray = ['a', 'b', 'c', 'd'];
// mutableArray.push('e'); - dodanie elementu na koniec
// mutableArray.pop(); - wyjecie ostatniego elementu
// mutableArray.unshift('x'); - dodanie elementu na poczatek
// mutableArray.shift(); - wyjecie pierwszego elementu
console.log(mutableArray);
