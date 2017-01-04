// Calculator spec
describe("Calculator", function(){
  // Declare all modules/files needed for test
  var Calculator;
  var jsdom = require("jsdom");

  // Create a "beforeEach" to before each of the it blocks
  //   THIS WILL DEFINE OUR VARS
  beforeEach(function(){
    // Creating empty fixture of our HTML
    //   Only place *what is needed* for JS to pass
    document = jsdom.jsdom(`<body>
      <button data-js="clearButton">C</button>
      <h1 data-js="output"></h1>
      <button data-js="numberButton">0</button>
      <button data-js="numberButton">1</button>
      <button data-js="numberButton">2</button>
      <button data-js="numberButton">3</button>
      <button data-js="numberButton">4</button>
      <button data-js="numberButton">5</button>
      <button data-js="numberButton">6</button>
      <button data-js="numberButton">7</button>
      <button data-js="numberButton">8</button>
      <button data-js="numberButton">9</button>
    </body>`);
    window = document.defaultView;
    Calculator = require("../js/calculator.js");
  });

  describe("has a clear clear button", function(){
    it("that is found on the page", function(){

      // Get access to variable where we store clear button
      // Calculator.clearButtonElement
      expect(Calculator.clearButtonElement.innerHTML).toBe("C");
    });

    it("sets the output back to nothing", function(){
      // Assumptions...
      //   That the output exists as a number
      Calculator.outputElement.innerHTML = "2";
      //   That we have called the onClearButtonClick function
      Calculator.onClearButtonClick();
      expect(Calculator.outputElement.innerHTML).toBe("");
    });
  });

  describe("has an output element", function(){
    it("that is found on the page", function(){
      expect(Calculator.outputElement.innerHTML).toBe("")
    });
  });

  describe("has number buttons", function(){
    it("such as the number 2 on the page", function(){
      expect(Calculator.numberButtonElements[2].innerHTML).toBe("2");
    });

    it("such as the number 8 on the page", function(){
      expect(Calculator.numberButtonElements[8].innerHTML).toBe("8");
    });

    it("that when clicked change the output to number clicked", function(){
      // mock/stub event data
      var e = {
        target: {
          innerHTML: "3"
        }
      };
      // Assumptions
      //  a number button (3) was clicked
      Calculator.onNumberButtonClick(e);
      expect(Calculator.outputElement.innerHTML).toBe("3")
    });

    it("should concat the numbers given one is already there", function(){
      // mock/stub event data
      var e = {
        target: {
          innerHTML: "6"
        }
      };
      // assumptions
      //  there is a number already in output
      //  a number button (6) was clicked
      Calculator.outputElement.innerHTML = "5";
      Calculator.onNumberButtonClick(e);
      expect(Calculator.outputElement.innerHTML).toBe("56");

    })
  });
});
