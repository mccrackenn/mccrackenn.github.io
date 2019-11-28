window.onload = () => {

    const numbersActionButton=document.getElementById('numbers-action');
    const numbersDisplayList=document.getElementById('numbers-display');
    const languageActionButton=document.getElementById('languageAction');
    const languageDisplayList=document.getElementById('languageDisplay')

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
    const languageArray= {
        language:['JavaScript','HTML','CSS','Java','C#','Python','C/C++']
    };

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };

    const popularLanguages=[
        {
            lang: 'JavaScript',
            rank: 1
        },
        {
            lang: 'Python',
            rank: 2
        },
        {
            lang: 'Java',
            rank: 3
        },
        {
            lang: 'C/CPP',
            rank: 4
        },
        {
            lang: 'PHP',
            rank: 5
        },
        {
            lang: 'Swift',
            rank: 6
        },
        {
            lang: 'C#',
            rank: 7
        }


    ]

    arrays.numbers.sort((a,b) =>a-b);
    languageArray.language.sort();
    //for(let number of arrays.numbers) {

    //}

    //arrays.numbers.forEach(number => console.log('Number: ' + number));

    numbersActionButton.onclick=function() {
        arrays.numbers.forEach(number => elfCode.appendToList(numbersDisplayList,number))
        //elfCode.appendToList(numbersDisplayList, number);
    }
    languageActionButton.onclick=function (){
        languageArray.language.forEach(thing => elfCode.appendToList(languageDisplayList, thing))
    }


}