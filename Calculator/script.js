const display = document.getElementById("display");

function appendToDisplay(input)
{
    display.value += input;
    // document.getElementById(display)=display;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    }
function show_sdg1(){
    document.getElementById("sdg1").classList.remove("hidden");
}
function closes_details(){
    document.getElementById("sdg1").classList.add("hidden");
}

function show_sdg2(){
    document.getElementById("sdg2").classList.remove("hidden");
}
function close_details(){
    document.getElementById("sdg2").classList.add("hidden");
}
function show_sdg3(){
    document.getElementById("sdg3").classList.remove("hidden");
}
function close(){
    document.getElementById("sdg3").classList.add("hidden");
}
function show_sdg4(){
    document.getElementById("sdg4").classList.remove("hidden");
}
function details(){
    document.getElementById("sdg4").classList.add("hidden");
}
function show_sdg5(){
    document.getElementById("sdg5").classList.remove("hidden");
}
function closing(){
    document.getElementById("sdg5").classList.add("hidden");
}
function show_sdg6(){
    document.getElementById("sdg6").classList.remove("hidden");
}
function cancel(){
    document.getElementById("sdg6").classList.add("hidden");
}
function show_sdg7(){
    document.getElementById("sdg7").classList.remove("hidden");
}
function prohibite(){
    document.getElementById("sdg7").classList.add("hidden");
}
function show_sdg8(){
    document.getElementById("sdg8").classList.remove("hidden");
}
function nope(){
    document.getElementById("sdg8").classList.add("hidden");
}
function show_sdg9(){
    document.getElementById("sdg9").classList.remove("hidden");
}
function noh(){
    document.getElementById("sdg9").classList.add("hidden");
}
function show_sdg10(){
    document.getElementById("sdg10").classList.remove("hidden");
}
function deny(){
    document.getElementById("sdg10").classList.add("hidden");
}
function show_sdg11(){
    document.getElementById("sdg11").classList.remove("hidden");
}
function done(){
    document.getElementById("sdg11").classList.add("hidden");
}
function show_sdg12(){
    document.getElementById("sdg12").classList.remove("hidden");
}
function reject(){
    document.getElementById("sdg12").classList.add("hidden");
}
function show_sdg13(){
    document.getElementById("sdg13").classList.remove("hidden");
}
function out(){
    document.getElementById("sdg13").classList.add("hidden");
}
function show_sdg14(){
    document.getElementById("sdg14").classList.remove("hidden");
}
function left(){
    document.getElementById("sdg14").classList.add("hidden");
}
function show_sdg15(){
    document.getElementById("sdg15").classList.remove("hidden");
}
function cancel_out(){
    document.getElementById("sdg15").classList.add("hidden");
}
function show_sdg16(){
    document.getElementById("sdg16").classList.remove("hidden");
}
function denied(){
    document.getElementById("sdg16").classList.add("hidden");
}
function show_sdg17(){
    document.getElementById("sdg17").classList.remove("hidden");
}
function denies(){
    document.getElementById("sdg17").classList.add("hidden");
}



