window.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const functionObjectDisplay = document.getElementById('functionObjectDisplay');
    const customClassDisplay = document.getElementById('customClassDisplay');

    //simpleObjectDisplay.textContent="foo";
    // function loader() {
    //     const simpleObjectAction = document.getElementById('simpleObjectAction');
    //     const functionObjectAction = document.getElementById('functionObjectAction');
    //     const customClassAction = document.getElementById('customClassAction')
    // }





    const simpleObject = {
        firstName: "James",
        lastName: "Watson",
        sayName: function () {
            const fullName= this.firstName + " " + this.lastName;
            console.log(fullName);
            //simpleObjectDisplay.textContent=fullName;
        }
    };
    simpleObjectAction.onclick = function() {
        simpleObject.sayName();
        simpleObjectDisplay.textContent=fullName;
    }

    simpleObject.dynamicMethod = () => {
        console.log("Dynamic Method");
    }

    function FunctionObject() {
        FunctionObject.prototype.sayName = function () {
            console.log("Function Object");
        }
    }

    class CustomClass {
        sayName() {
            console.log("CustomClass");
        }
    }

    simpleObject.sayName();
    simpleObject.dynamicMethod();
    //Need to call new on it, constructor 
    const functionObject = new FunctionObject();
    functionObject.sayName();

    const custClass = new CustomClass();
    custClass.sayName();

}