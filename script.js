function predict() {
    var outlook = document.getElementById("outlook").value;
    var temperature = document.getElementById("temperature").value;
    var humidity = document.getElementById("humidity").value;
    var windy = document.getElementById("windy").value;

    // Decision tree logic
    if (outlook === "sunny") {
        if (humidity === "high") {
            displayResult("Don't play tennis");
        } else {
            displayResult("Play tennis");
        }
    } else if (outlook === "overcast") {
        displayResult("Play tennis");
    } else {
        if (windy === "true") {
            displayResult("Don't play tennis");
        } else {
            displayResult("Play tennis");
        }
    }
}

function displayResult(result) {
    document.getElementById("result").innerText = result;
}
