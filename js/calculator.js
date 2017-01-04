// Calculator javascript
// Functional/Implemented code

var calculator = this;

// the keyword var creates private scope
calculator.clearButtonElement = document.querySelector("[data-js='clearButton']");

calculator.outputElement = document.querySelector("[data-js='output']");

calculator.numberButtonElements = document.querySelectorAll("[data-js='numberButton']")

calculator.onNumberButtonClick = function(e){
  // set the output to THIS number that was clicked
  var clickedNumberElement = e.target;
  calculator.outputElement.innerHTML += clickedNumberElement.innerHTML;
}

calculator.onClearButtonClick = function(){
  // THE SCOPE IS RESET TO THE BUTTON THAT WAS CLICKED
  calculator.outputElement.innerHTML = "";
}


// LISTENERS ATTACHED HERE
//
//

calculator
  .clearButtonElement
  .addEventListener("click", calculator.onClearButtonClick)

// Would prefer .forEach... but have error in Jasmine specs
for (var i = 0; i < calculator.numberButtonElements.length; i++) {
  calculator.numberButtonElements[i].addEventListener("click", calculator.onNumberButtonClick)
}
