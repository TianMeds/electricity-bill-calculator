//Math formulae
const hourly_cost = (watt, rate) => {
    var hourly = (watt / 1000) * rate
    return hourly;
};
const daily_cost = (watt, usage, rate) => {
    let daily = ((watt * usage) / 1000) * rate;
    return daily;
};
const monthly_cost = (watt, usage, rate) => {
    let monthly = (((watt * usage * 30)) / 1000) * rate;
    return monthly;
};

// var form_data = {};
export const retrieve_form_data = () => {
    var form_data = {};
    form_data["name"] = document.getElementById('applianceName').value;
    form_data["rate"] = document.getElementById('rate').value;
    form_data["watt"] = document.getElementById('watt').value;
    form_data["usage"] = document.getElementById('usage').value;

    return form_data; 
};
export const compute_form_data = (retrieved_data) => {
    var computed_data = {};
    computed_data["name"] = retrieved_data.name;
    computed_data["hourly"] = (hourly_cost(retrieved_data.watt, retrieved_data.rate)).toFixed(2); 
    computed_data["daily"] = (daily_cost(retrieved_data.watt, retrieved_data.usage, retrieved_data.rate)).toFixed(2);
    computed_data["monthly"] = (monthly_cost(retrieved_data.watt, retrieved_data.usage, retrieved_data.rate)).toFixed(2);

    return computed_data;
};

//Creation and Append of Table Headers
export const append_table_header = () => {
    var table = document.createElement("table");
    table.setAttribute('id', 'data-result');
    var thead = document.createElement("thead");
    var header_row = document.createElement("tr");

    var header = ['Appliance', 'Hourly', 'Daily', 'Monthly', 'Actions'];
    header.forEach(headers => {
        var header_cell = document.createElement("th");
        header_cell.classList.add("table-header");
        header_cell.textContent = headers;
        header_row.appendChild(header_cell);
    });
    thead.appendChild(header_row);
    table.appendChild(thead);
    document.querySelector("#result").appendChild(table);
};

export const populate_table = (computed_data) => {
    const table = document.querySelector('#data-result');
    const row = document.createElement('tr');
    
    Object.values(computed_data).forEach(data => {
        const cell = document.createElement('td'); //New individual table data tag
        cell.classList.add('table-data'); //Add class to td tag
        cell.textContent = data;
        row.appendChild(cell);
    });
    
    const button_cell = document.createElement('td');
    const edit_button = document.createElement('button');
    edit_button.textContent = 'Edit';
    edit_button.classList.add('edit');
    const delete_button = document.createElement('button');
    delete_button.textContent = 'Delete';
    delete_button.classList.add('delete');
    button_cell.appendChild(edit_button);
    button_cell.appendChild(delete_button);
    row.appendChild(button_cell)

    table.appendChild(row);
};

export const update_record = (computed_data, row) => {
    row.cells[0].innerHTML = computed_data.name;
    row.cells[1].innerHTML = computed_data.hourly;
    row.cells[2].innerHTML = computed_data.daily;
    row.cells[3].innerHTML = computed_data.monthly;
};

export const reset_form = () => {
    document.querySelector('form').reset(); //Clear form for the next entry
    const row = null; 

    return row;
}

/*
export const on_edit = (array_of_form_data, callback) => {
    let table = document.getElementById("data-result");
    let edit_buttons = table.querySelectorAll(".edit");
    for (let i = 0; i < edit_buttons.length; i++) {
        let edit_button = edit_buttons[i];
        edit_button.addEventListener("click", function() {
            let row_index = edit_button.parentElement.parentElement.rowIndex - 1;
            let row = edit_button.parentNode.parentNode;
            document.querySelector("#rate").value = array_of_form_data[i].rate;
            document.querySelector("#applianceName").value = array_of_form_data[i].name;
            document.querySelector("#watt").value = array_of_form_data[i].watt;
            document.querySelector("#usage").value = array_of_form_data[i].usage;

            callback(row, row_index);
        });
    } 
}
export const on_delete = (row) => {
    let table = document.getElementById("data-result");
    let delete_buttons = table.querySelectorAll(".delete");
    for (let i = 0; i < delete_buttons.length; i++) {
        let delete_button = delete_buttons[i];
        delete_button.addEventListener("click", function() {
            if (confirm('Do you want to delete this record?')) {
                row = delete_button.parentElement.parentElement;
                document.getElementById('data-result').deleteRow(row.rowIndex);
                row = reset_form();
            }
        });
    } 
} 
*/