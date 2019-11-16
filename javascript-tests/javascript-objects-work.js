const person ={
    firstName:"Neil",
    lastName:"McCracken",
    fullName: function(){
        return this.firstName + " "+this.lastName;
    }
}

let divider=(title) => {
    console.log("\n==================");
    console.log(title);
    console.log("==================");
};

divider("Person");
console.log("First Name: "+person.firstName);
console.log('Last Name: '+person.lastName);
let myName=person.fullName();
console.log('Full Name: '+myName);

const calculator = {
    operand01:-1,
    operand02:-1,
    add: function() {
        console.log("Add Length of first and lastNames: "+(calculator.operand01 + calculator.operand02));
    },
    subtract: function() {
        console.log("Subtract Length of first and lastNames: "+(calculator.operand01 -calculator.operand02));
    }
}
divider('Calculator');
calculator.operand01=person.firstName.length;
calculator.operand02=person.lastName.length;
console.log("Operand01 is the length of firstName: "+calculator.operand01
     +"\nOperand02 is the length of lastName: "+ calculator.operand02);

calculator.multiply=(A, B)=> {
    return A * B;
}

calculator.add();
calculator.subtract();
multiplyResult=calculator.multiply(calculator.operand01,calculator.operand02);
console.log("Multiply Length of first and lastNames: "+multiplyResult);

