import {insertAfter, populateTable, computedResult} from './functions.js';

const calc = document.querySelector(".userInput"); //storing form data into a const
const resultArray = [];

const calculate = (ev)=> { //Function expression && arrow function
    ev.preventDefault(); //Stop the form from submitting & stop refreshing page

    //Calls the function and stores returned object value into a variable
    const result = computedResult();
    //Appends object to array
    resultArray.push(result);
    console.log(resultArray);












    // console.log('Electricity rate: ' + rate + '\nName: ' + name + '\nWattage: ' + watt + '\nUsage: ' + usage);

    // const hourly = hourlyCost(watt, rate);
    // const daily = dailyCost(watt, usage, rate); //Computes for daily price
    // const monthly = monthlyCost(watt, usage, rate);


    // //Output Computed result to the table
    // const arrData = [
    //     { name: name, hourly: hourly, daily: daily, monthly: monthly }
    // ];
   
    // populateTable(arrData);
   
    // for (let i = 0; i < arrData.length; i++) {
    //     let row = table.insertRow(-1);
    //     let cell = row.insertCell(0);
    //     // cell.innerHTML = name;
    //     // cell.innerHTML = hourly;
    //     // cell.innerHTML = daily;
    //     cell.innerHTML = monthly;
    // }


    // var tableRow = document.createElement("tr");
    // tableRow.innerHTML = name;
    // var tableData = document.querySelector(".dataResult");
    // insertAfter(tableData, tableRow);

    // appendText('monthly', monthly); 

    document.querySelector('form').reset(); //Clear form for the next entries
    // console.log('Electricity rate: ' + rate + '\nName: ' + name + '\nWattage: ' + watt + '\nUsage: ' + usage);
    // console.log(arrData);
}

calc.addEventListener('submit', calculate); //When button is clicked, calculate() gets executed 


// -------------------------------------------------------------------------------------------------------------------- //

