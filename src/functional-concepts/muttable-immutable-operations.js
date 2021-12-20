// const numbers = [1, 2, 3, 4];
// const otherNumbers = numbers;
// numbers.push(5);

// const numbers = [1, 2, 3, 4];
//
// // #1 Zadanie - jak utworzyc nowa tablice a nie mutowac pozostalej?
// const otherNumbers = [...numbers];
// otherNumbers.push(5);
// console.log(numbers);
// console.log(otherNumbers);

const letters = ['a', 'b', 'c'];
// #2 Zadanie: Jak utworzyc tablice ze zmofyfikowanymi elementami
const myUpperLetters = letters.map(e => e);
// console.log(letters === myUpperLetters);


const myFruits = ['apple', 'banana', 'mango', 'cherry'];
const myFruitsWithoutCherry = [...myFruits].slice(0, -1);
console.log(myFruitsWithoutCherry);


