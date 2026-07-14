let string = "";

const operators = ["+", "-", "*", "/", "%"];

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    const lastChar = string[string.length - 1];
    if (value == "=") {
      try {
        let expression = string.replace(/(\d+)%/g, "($1/100)");
        string = eval(expression).toString();
        document.querySelector("input").value = string;
      } catch (error) {
        document.querySelector("input").value = "Error";
        string = "";
      }
    } else if (value == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (value == "DEL") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else {
      if (operators.includes(value) && operators.includes(lastChar)) {
        alert("Cannot use two operators together!");
        return;
      }
      string += value;
      document.querySelector("input").value = string;
    }
  });
});
