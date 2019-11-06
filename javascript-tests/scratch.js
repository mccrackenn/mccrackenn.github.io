//function getFirstName(){
//    return 'Bill';
//}
const firstNames=['Bill', 'Sue','Tom','Ellen'];
//letCurrentIndex=2;
const getFirstName=(currentIndex)=> {return firstNames[currentIndex]};

function getValueFromArray(theArray, index) {
    return theArray[index];
}

add =(a, b)=>{return a + b};
const sum=add(2.5,2.5);
console.log(sum);

niceDivider=()=>{
    console.log('----------------');
}

const substract=(a,b)=>{return a-b};

let substractValue=(20,10);
console.log(substractValue);

const firstName=getFirstName(3);
console.log(firstName);

const arrayItem=getValueFromArray(firstNames, 2);
console.log(arrayItem);

niceDivider();

for(i=0; i<firstNames.length;i++) {
    console.log(firstNames[i]);
}

