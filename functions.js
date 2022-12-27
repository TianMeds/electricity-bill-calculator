//Object 
function appliance(name, rate, watt, usage, {computedCost}) {
    this.name = name;
    this.rate = rate;
    this.watt = watt;
    this.usage = usage;
    this.computedCost = computedCost;
}


export const computedResult = () => {
    //Variable Assignment from form inputs
    let rate = document.getElementById('rate').value,
        name = document.getElementById('applianceName').value,
        watt = document.getElementById('watt').value,
        usage = document.getElementById('usage').value;

    //Calculation of electricity cost
    const hourly = hourlyCost(watt, rate);
    const daily = dailyCost(watt, usage, rate);
    const monthly = monthlyCost(watt, usage, rate);

    return {name, hourly, daily, monthly};
}

//Math formulae
export const hourlyCost = (watt, rate) => {
    return (watt / 1000) * rate;
}
export const dailyCost = (watt, usage, rate) => {
    return ((watt * usage) / 1000) * rate;
}
export const monthlyCost = (watt, usage, rate) => {
    return (((watt * usage * 30)) / 1000) * rate;
}



export const populateTable = (result) => {
    const table = document.querySelector('#dataResult');
    let row = document.createElement('tr');

    Object.values(result).forEach(data => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(data);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })
    document.querySelector('#dataResult').appendChild(row);
}

// export const populateTable = (resultsArray) => {
//     const table = document.querySelector('#dataResult');
//     let row = document.createElement('tr');
//     resultsArray.forEach(object => {
//         Object.values(object).forEach(data => {
//             let cell = document.createElement('td');
//             let textNode = document.createTextNode(data);
//             cell.appendChild(textNode);
//             row.appendChild(cell);
//         })
//     })
//     document.querySelector('#dataResult').appendChild(row);
// }

//-------------------------------------------------------------------------------------//

//UNUSED//
export const appendText = (element, value) => {
    const addedText = document.createTextNode(value); //stores function parameter to a variable
    const result = document.querySelector("." + element); //stores desired element id

    result.appendChild(addedText); //Appends text to selected element class/id
}
export const insertAfter = (referenceNode, newNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

