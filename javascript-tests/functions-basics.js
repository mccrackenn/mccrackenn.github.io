window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');//gets a handle on the html element, p here
    const functionTestParameters=document.getElementById('functionParametersDisplay');
    const functionParametersDisplay=document.getElementById('functionReturnDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');


    function simple() {
        console.log('simple');
        simpleFunctionDisplay.textContent = "simple";

    }
    function testParameters(a) {
            console.log(a);
            functionTestParameters.textContent=a;
            //functionParametersDisplay.textContent=(a);
    }
    
    function functionReturn() {
        return("Many functions return values");
        
    }
    //testParameters("Many functions take parameters");
    const returnValue=functionReturn();
    console.log(returnValue);

    functionCallsAction.onclick = simple, testParameters("Many functions take parameters");
    
   



}
     