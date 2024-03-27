const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("section #buttons_container button");
const display = document.getElementById("display");
buttons.forEach((btn) => {
  btn.onclick = () => {
    display.innerHTML = "";
    if (btn.innerHTML == "C") {
      let l = screen.innerHTML.length;
      screen.innerHTML = screen.innerHTML.substring(0, l - 1);
    } else if (btn.getAttribute("id") == "clear") {
      screen.innerHTML = "";
    } else if (btn.innerHTML == "=") {
      displayResult();
    } else {
      screen.innerHTML += btn.innerHTML;
    }
  };
});
function displayResult() {
    try{
        let result = eval(screen.innerHTML);
        display.innerHTML =
          result == "Infinity"
            ? "you can't devise by zero !!!"
            : "the result is : "+ Math.fround(result);
    }
    catch(err){
        display.innerHTML = "please complete your operation !!!";
    }
 
}
