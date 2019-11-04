function divider() {
    console.log('-------------')
}

const myArray=[];
let numbers=[1, 2, 3, 5, 7];

console.log(numbers);

console.log(numbers[2]);
console.log('numbers:', numbers.length);

console.log('number 3:', numbers[numbers.length -3]);

numbers.push(25);//Push adds to the end of the array.
console.log(numbers);
numbers.pop();
console.log(numbers);

const cloudy=true;
divider();
const items=[1, 'two',[3,4],false,cloudy,null];
for(let i=0; i<items.length;i++){
    //console.log("Value of i:",i);
    console.log('Value of Items:',items[i]);
}
divider();
//Another way to loop over an array
for(let item of items){
    console.log(item);
}

divider();

const files=["bundle.js", "*.js.map", ".c9"];
console.log(files.join(','));
console.log(files);

const fileNames="bundle.js, *.js.map, .c9";



function stringToArray(input) {
    console.log(input.split(','));

}
stringToArray(fileNames);

const emptyObject={}
let myObject={
    five: 5,
    six: 'six'
};
numbers=[1, 2, 3];
const smallNumbers={
    one: 1,
    two: 2,
    three: 3
}
console.log("objects:",myObject, smallNumbers)
console.log('Values in our Object:',
    smallNumbers.one,
    smallNumbers.two,
    smallNumbers.three,
    smallNumbers['one']
);
divider();

console.log(myObject.five);
console.log(myObject.six);

myObject.newItem="This is a new item in my object"
console.log('Object with new item:', myObject);

divider();
console.log(items);
items.push(myObject);
console.log(items)