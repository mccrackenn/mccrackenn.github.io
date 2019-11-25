window.onload = () => {

    const numbersActionButton=document.getElementById('numbers-action');
    const numbersDisplayList=document.getElementById('numbers-display');

    const elfCode = {
        appendToList: (list, value ) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }

    // myList.onclick = () => {
    //     const myList = document.getElementById('listDisplay');
    //     const inputText=document.getElementById('nameDisplay').value;
    //         elfCode.appendToList(myList,inputText);
    //         };

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };

    arrays.numbers.sort((a,b) =>a-b)

    //for(let number of arrays.numbers) {

    //}

    //arrays.numbers.forEach(number => console.log('Number: ' + number));

    numbersActionButton.onclick=function() {
        arrays.numbers.forEach(number => elfCode.appendToList(numbersDisplayList,number))
        //elfCode.appendToList(numbersDisplayList, number);
    }
}