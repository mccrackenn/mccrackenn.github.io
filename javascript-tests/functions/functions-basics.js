window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');//gets a handle on the html element, p here
    const functionTestParameters=document.getElementById('functionParametersDisplay');
    const functionParametersDisplay=document.getElementById('functionReturnDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    const listButton = document.getElementById('addToListAction');
    
    
    const elfCode = {
        appendToList: (list, value ) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    
    function simple() {
        console.log('simple');
        simpleFunctionDisplay.textContent = "functions should consist of statements designed to perform a single task.";

    }
    function testParameters(a) {
            console.log(a);
            functionTestParameters.textContent=a;
    }
    
    function functionReturn() {
        return("Many functions return values");
        
    }

    functionCallsAction.onclick = function(){
        simple();
        testParameters("Many functions take parameters");
        let returnValue=functionReturn() 
            functionParametersDisplay.textContent=returnValue;
        
    }
    listButton.onclick = () => {
        const myList = document.getElementById('listDisplay');
        const inputText=document.getElementById('nameDisplay').value;
            elfCode.appendToList(myList,inputText);
            };
            
}
