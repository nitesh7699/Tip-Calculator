//Step-1: Selected the required element
const input_box = document.getElementById("bill")
const submit_button = document.querySelector("button")
const output = document.getElementsByClassName("output")[0] //returns array

//events and addEventListeners
//It understands that i am doing a specific event and based on that 
//it did some functions

//eventListener ->
//element => Hey, addEventListener if hover is happening show a dialog box
submit_button.addEventListener("click", calculateTip);

function calculateTip(){
    //console.log("Clicked!!!")
    let bill_amt = input_box.value;
    if(bill_amt == ""){
        alert("Please enter a value")
        return;
    }

    //console.log(bill_amt)
    let tip = bill_amt*2/100;
    console.log(tip)

    output.innerText = `tip is ${tip}`;
}


//Step-2: input, submit, button, output section

//When a value is entered inside a input

//Indentify when the submit button is clicked