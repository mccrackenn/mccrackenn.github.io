window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionParametersDisplay=document.getElementById('functionParametersDisplay');
    const functionReturnDisplay=document.getElementById('functionReturnDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

    function simple() {
        console.log('simple');
        simpleFunctionDisplay.textContent = "simple";

    }
    function testParameters(a) {
            console.log(a);
            functionParametersDisplay.textContent=(a);
    }
    
    function returnDisplay() {
        return("Many functions return values");
        returnDisplay.textContent=return;
    }

    functionCallsAction.onclick = simple,testParameters("Many functions return values");
    functionCallsAction.onclick=
};



     