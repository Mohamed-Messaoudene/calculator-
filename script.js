const display=document.getElementById("display");
function displayResult(){
    let result=eval(screen.innerHTML);
    display.innerHTML="the result is : "+result;
}