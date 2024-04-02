let displayText = "0";
const display = document.getElementById("display");

function updateDisplay() {
    display.textContent = displayText;
}

function appendToDisplay(value) {
    if (displayText === "0") {
        displayText = value;
    } else {
        displayText += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayText = "0";
    updateDisplay();
}

function calculate() {
    try {
        displayText = eval(displayText).toString();
    } catch (error) {
        displayText = "Error";
    }
    updateDisplay();
}

function erase() {
   if (displayText.length > 1) {
      displayText = displayText.slice(0, -1);
      updateDisplay();
   } else {
      displayText = "0";
      updateDisplay();
   }
}

updateDisplay();