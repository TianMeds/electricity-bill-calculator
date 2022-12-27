import {insertAfter, populateTable, computedResult} from './functions.js';

const form = document.querySelector('#userInput'); //storing form data into a const

const resultArray = [];

const calculate = (ev)=> { //Function expression && arrow function
    ev.preventDefault(); //Stop the form from submitting & stop refreshing page

    //variable assignment from form and calculation
    const result = computedResult();
    //Appends object to array
    resultArray.push(result);
    populateTable(result);

    console.log(resultArray);

    document.querySelector('form').reset(); //Clear form for the next entries
}

form.addEventListener('submit', calculate); //When button is clicked, calculate() gets executed 




// -------------------------------------------------------------------------------------------------------------------- //

