(function () {

    "use strict";

    var firstNumber = document.getElementsByName("firstNumber"),
        secondNumber = document.getElementsByName("secondNumber"),
        showTotal = document.getElementById("display");

    //Add function
    var add = function () {
        var firstNumber1 = parseFloat(firstNumber[0].value);
        var secondNumber2 = parseFloat(secondNumber[0].value);
        var result = firstNumber1 + secondNumber2;
        showTotal.innerHTML = result;
    };

    var subtract = function () {
        var firstNumber1 = parseFloat(firstNumber[0].value);
        var secondNumber2 = parseFloat(secondNumber[0].value);
        var result = firstNumber1 - secondNumber2;
        showTotal.innerHTML = result;
    };

    var multiply = function () {
        var firstNumber1 = parseFloat(firstNumber[0].value);
        var secondNumber2 = parseFloat(secondNumber[0].value);
        var result = firstNumber1 * secondNumber2;
        showTotal.innerHTML = result;
    };

    var divide = function () {
        var firstNumber1 = parseFloat(firstNumber[0].value);
        var secondNumber2 = parseFloat(secondNumber[0].value);
        var result = firstNumber1 / secondNumber2;
        showTotal.innerHTML = result;
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

