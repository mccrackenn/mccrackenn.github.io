//map to new array
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus',
    'rabbit', 'lion', 'dog'];

//returns the first letter in each string of the array into the new array
const secretMessage = animals.map(word => {
    return word[0];
})

console.log(secretMessage.join(''));   

const bigNumbers = [100, 200, 300, 400, 500];
//Map into New Array, divides each element by 100, can be any word, here it's number
const smallNumbers=bigNumbers.map(number => {
  return number / 100;
})
console.log(smallNumbers);

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))

const randomNumbers = [375, 200, 3.14, 7, 13, 852];


smallishNumbers=bigNumbers.filter(numbs => {
    return numbs<250;
})
//sort works on strings in ascending order but not numbers. Needs a callback function/comparsion function
// function sortNumbers(a, b) {
//     if (a>b) {
//         return 1;
//     } else if (b>a) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

//Now with ternary operator, same as above but more concise
function sortNumbers(a, b) {
    return a>b? 1: b>a ?-1:0;
}

randomNumbers.sort(sortNumbers);
console.log(randomNumbers);
