import {
    append_table_header,
    populate_table,
    compute_form_data,
    retrieve_form_data,
    update_record,
    reset_form
} from './functions.js';

const form = document.querySelector('#userInput'); 
const array_of_form_data = [];
const computed_data_array = [];
let function_has_run = false;
let row_index = 0;
let row = null;


form.addEventListener('submit', (ev) => {
    ev.preventDefault(); //Stop the form from submitting & stop refreshing page
    if (row == null) {
        if (!function_has_run) { // Makes sure table header will output once
            append_table_header();
            function_has_run = true;
        }  
        let retrieved_data = retrieve_form_data();
        array_of_form_data.push(retrieved_data); //Store form values to array of objects outside this function

        let computed_data = compute_form_data(retrieved_data);
        computed_data_array.push(computed_data);
    
        //Populates table rows 
        populate_table(computed_data);


        let table = document.getElementById("data-result");
        let edit_buttons = table.querySelectorAll(".edit");
        for (let i = 0; i < edit_buttons.length; i++) {
            let edit_button = edit_buttons[i];
            edit_button.addEventListener("click", function() {
                row_index = edit_button.parentElement.parentElement.rowIndex - 1;
                row = edit_button.parentNode.parentNode;
                document.querySelector("#rate").value = array_of_form_data[i].rate;
                document.querySelector("#applianceName").value = array_of_form_data[i].name;
                document.querySelector("#watt").value = array_of_form_data[i].watt;
                document.querySelector("#usage").value = array_of_form_data[i].usage;
            });
        } 
        
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
    else {
        let retrieved_data = retrieve_form_data();
        array_of_form_data[row_index] = retrieved_data;
        let computed_data = compute_form_data(retrieved_data);
        computed_data_array[row_index] = computed_data
        update_record(computed_data, row);
    }
    row = reset_form();
    console.log(array_of_form_data);
}); 




