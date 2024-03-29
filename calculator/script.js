const input = document.getElementById('input');
const  number = document.querySelectorAll('.numbers div');
const  operator = document.querySelectorAll('.operators div');
const  result = document.getElementById('result');
const  clear = document.getElementById('clear');
let  res = false;

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (res === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (res === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {

      res = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      res = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "−" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length === 0) {
      alert("enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }

  });
}

result.addEventListener("click", function() {
  var inputString = input.innerHTML;

  var numbers = inputString.split(/\D/g);

  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  // console.log(inputString);
  // console.log(operators);
  // console.log(numbers);

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("−");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("−");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0];

  res = true;
});

clear.addEventListener("click", function() {
  input.innerHTML = "";
})