var amount_input = document.querySelector("#input");
var range_input = document.querySelector("#range");
var range_display = document.querySelector("#range_value");
var tipdisplay = document.querySelector("#tipdisplay");
var totaldisplay = document.querySelector("#totaldisplay");





function rangeValue(range_input) {
    range_display.innerHTML = "";
    range_display.innerHTML = `${range_input.value}`;
}

range_input.addEventListener("input",() => {
    rangeValue(range_input)
    calculate_tip ()
})



function calculate_tip (){
    if(amount_input.value>0){
        tipdisplay.innerText = `${(amount_input.value*range_input.value)/100}`;
        totaldisplay.innerText = `${(+(amount_input.value*range_input.value)/100)+(+amount_input.value)}`;
    }
}

