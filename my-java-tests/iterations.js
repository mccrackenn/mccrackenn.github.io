// .forEach() is used to execute the same code on every element in an array but
//       does not change the array and returns undefined.
// .map() executes the same code on every element in an array and returns a new array with the updated elements.
// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the
//       elements that return truthy for the criteria.
// .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function.
//      It returns -1 if none of the elements in the array satisfies the condition.
// .reduce() iterates through an array and takes the values of the elements and returns a single value.

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
const smallNumbers = bigNumbers.map(number => {
    return number / 100;
})
console.log(smallNumbers);


const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

//Variable that filters bigNumbers and returns numbers less than 250
smallishNumbers = bigNumbers.filter(numbs => {
    return numbs < 250;
})


console.log(smallishNumbers);
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
    return a > b ? 1 : b > a ? -1 : 0;
}

randomNumbers.sort(sortNumbers);
console.log(randomNumbers);

//find a location of an element in an Array, findIndex, saved to a variable
const moreAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
foundAnimal = moreAnimals.findIndex(ani => {
    return ani === "elephant";
})
console.log(foundAnimal);

//Using findIndex to see if an element starts with Z
const animalWithZ = moreAnimals.findIndex(ani => {
    return ani[0] === 'z' ? true : false;
})

if (animalWithZ === true) {
    console.log("Yep, animal here that starts with Z");
} else {
    console.log("No Z animals here!");
}

const newNumbers = [1, 3, 5, 7];

//Reduce can help with adding running totals
newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of the accumulator is ', accumulator);
    console.log('The value of the current value is ', currentValue);
    return accumulator + currentValue;
}, 10)  //The value of 10 becomes the initial accumulator
console.log(newSum);

//Print a boolean value depending on the condition, words less than 5 characters in [moreAnimals]
console.log(moreAnimals.some(word => {
    return word.length < 5;
}))
//Similar to above but assigns words that meet the condition to a new array.
const interestingWords = moreAnimals.filter((word) => {
    return word.length < 5;

})
console.log(interestingWords);

//Return a boolean value if all words in array have 4 or more letters.
console.log(moreAnimals.every((word) => {
    return word.length >= 4;
}))

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

cities.forEach(city => console.log('Have you visited ' + city + '?'));