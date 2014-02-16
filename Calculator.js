(function () {

    "use strict";

    var firstNumber = document.getElementsByName("firstNumber");
    var secondNumber = document.getElementsByName("secondNumber");
    var showTotal = document.getElementById("display");

    //Add function
    var add = function () {
        //if ((firstNumber.value !== "undefined") && (secondNumber.value !== "undefined")) {

        //    var result = firstNumber.value + secondNumber.value;
        //    showTotal.innerHTML = result;
        //} else {
        //  console.log("I've got some work to do!");
        //}
        var result = (firstNumber[0].value) + (secondNumber[0].value);
        document.getElementById("display").innerHTML = result;
        console.log(typeof result)
    };

    var subtract = function () {
        var result = (firstNumber[0].value) - (secondNumber[0].value);
        document.getElementById("display").innerHTML = result;
        console(result);
    };

    var multiply = function () {
        var result = (firstNumber[0].value) * (secondNumber[0].value);
        document.getElementById("display").innerHTML = result;
    };

    var divide = function () {
        var result = (firstNumber[0].value) / (secondNumber[0].value);
        document.getElementById("display").innerHTML = result;
    };

    var calculate = function () {
        document.getElementById("calculateBtn").onclick = function () {

            var signs = document.getElementsByName("operator");

            for (var i = 0; i < signs.length; i++) {

                if (signs[i].checked) {

                    if (signs[i].value === "+") {

                        add();

                    } else if (signs[i].value === "-") {

                        subtract();

                    } else if (signs[i].value === "*") {

                        multiply();

                    } else if (signs[i].value === "/") {

                        divide();
                    }
                }
            }
        };
    };

    window.onload = function () {
        calculate();
        //reset();
    };

}());

