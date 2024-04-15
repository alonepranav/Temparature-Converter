function convert() {

    var Temperature = document.getElementById("temperature").value;
    var from = document.getElementById("first").value;
    var to = document.getElementById("second").value;
    var result = document.getElementsByClassName("result")[0];

    if (from == "C" && to == "C")
        resultString = `Celcius = ${Temperature} ℃`;

    else if (from == "C" && to == "F")
        resultString =
            "Fahrenheit = " + FromCelciusToFahrenheit(Temperature) + " ℉";

    else if (from == "C" && to == "K")
        resultString = "Kelvin = " + FromCelciusToKelvin(Temperature) + " K";

    else if (from == "F" && to == "F")
        resultString = `Fahrenheit = ${Temperature} ℉`;

    else if (from == "F" && to == "C")
        resultString =
            "Celcius = " + FromFahrenheitToCelcius(Temperature) + " ℃";

    else if (from == "F" && to == "K")
        resultString =
            "Kelvin = " + FromFahrenheitToKelvin(Temperature) + " K";

    else if (from == "K" && to == "K")
        resultString = `Kelvin = ${Temperature} K`;

    else if (from == "K" && to == "C")
        resultString = "Celcius = " + FromKelvinToCelcius(Temperature) + " ℃";

    else if (from == "K" && to == "F")
        resultString =
            "Fahrenheit = " + FromKelvinToFahrenheit(Temperature) + " ℉";

    result.innerText = resultString;
}

//   Celcius section
function FromCelciusToKelvin(Temperature) {
    var Kelvin = parseFloat(273.15) + parseInt(Temperature);
    return Kelvin;
}

function FromCelciusToFahrenheit(Temperature) {
    var Fahrenheit = (9 * parseInt(Temperature)) / 5 + 32;
    return Fahrenheit;
}

//   Fahrenheit section
function FromFahrenheitToKelvin(Temperature) {
    var Kelvin =
        parseFloat(273.15) + ((parseInt(Temperature) - 32) * 5) / 9;
    return Kelvin;
}

function FromFahrenheitToCelcius(Temperature) {
    var Celcius = ((parseInt(Temperature) - 32) * 5) / 9;
    return Celcius;
}

//   Kelvin section
function FromKelvinToCelcius(Temperature) {
    var Celcius = parseInt(Temperature) - parseFloat(273.15);
    return Celcius;
}

function FromKelvinToFahrenheit(Temperature) {
    var Fahrenheit =
        (9 * (parseFloat(Temperature) - parseFloat(273.15))) / 5 + 32;
    return Fahrenheit;
}

// _________________________ SC [ C : Star ] _________________________  //