'use strict';
const counterValue = document.getElementById("counter-value");
const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");
const btnIncrease = document.getElementById("btn-increase");

let value = 0;
let color = ["#d9480f", "#5c940d"];

function init() {
    setValueText(value);
    
    btnDecrease.addEventListener("click", ()=> {
        decrease();
    });
    btnReset.addEventListener("click", ()=>{
        reset();
    });
    btnIncrease.addEventListener("click", ()=>{
        increase();
    });
}

function decrease() {
    value--;
    setValueText(value);
}

function reset() {
    value = 0;
    setValueText(value);
}

function increase() {
    value++;
    setValueText(value);
}

function setValueText(currentValue) {
    let color = handleColor(currentValue);
    console.log(color);
    counterValue.innerText = currentValue;
    counterValue.style.color = color;
}

function handleColor(value) {
    console.log(value);
    let color = "";
    switch (true) {
        case value > 0:
            color = "#5c940d";
            break;
        case value < 0:
            color = "#d9480f";
            break;
        case value = 0:
            color = "#FFF";
            break;
        default:
            color = "#FFF";
    }
    return color;
}

init();
