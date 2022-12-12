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


export const populateTable = (items) => {
    const table = document.getElementById("dataResult");

    items.forEach ( items => {
        let row = table.insertRow(-1);
        

       
        let name = row.insertCell(0);
        name.innerHTML = items.name;

        let hourly = row.insertCell(1);
        hourly.innerHTML = items.hourly;

        let daily = row.insertCell(2);
        daily.innerHTML = items.daily;

        let monthly = row.insertCell(3);
        monthly.innerHTML = items.monthly;
    });
}

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

