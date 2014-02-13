"use strict";

var firstNumber = document.getElementsByName("firstNumber");
var secondNumber = document.getElementsByName("secondNumber");
var showTotal = document.getElementById("display");

//Add function
function add() {
    if ((firstNumber.value !== "undefined") && (secondNumber.value !== "undefined")) {


        var result = firstNumber.value + secondNumber.value;
        showTotal.innerHTML = result;
    } else {
        console.log("I've got some work to do!");
    }

}


//Subract function
function subtract(firstNumbmer, secondNumber) {
    var result = firstNumber - secondNumber;
    document.getElementById("display").innerHTML = result;
}

//Multiply function
function multiply(firstNumbmer, secondNumber) {
    var result = firstNumber * secondNumber;
    document.getElementById("display").innerHTML = result;
}

//Divide function
function divide(firstNumbmer, secondNumber) {
    var result = firstNumber / secondNumber;
    document.getElementById("display").innerHTML = result;
}

function calculate() {

    var signs = document.getElementsByName("operator");

    for (var i = 0; i < signs.length; i++) {

        if (signs[i].checked) {

            if (signs[i].value === "+") {

                //console.log("Calling the Addition function");
                add();

            } else if (signs[i].value === "-") {
                console.log("Calling the Subtract function");

            } else if (signs[i].value === "*") {

                console.log("Calling the Multiply function");

            } else if (signs[i].value === "/") {

                console.log("Calling the Divide function");

            }

        }

    }
}