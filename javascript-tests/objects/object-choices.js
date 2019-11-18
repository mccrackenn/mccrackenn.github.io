const simpleObject={
    sayName:()=> {
        console.log('simple Object');
    }
};

simpleObject.dynamicMethod=()=>{
    console.log("Dynamic Method");
}

function FunctionObject(){
    FunctionObject.prototype.sayName=function() {
        console.log("Function Object");
    }
}

class CustomClass{
    sayName() {
        console.log("CustomClass");
    }
}

simpleObject.sayName();
simpleObject.dynamicMethod();
const functionObject=new FunctionObject();
functionObject.sayName();

const custClass=new CustomClass();
customClass.sayName();