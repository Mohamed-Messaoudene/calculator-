const screen=document.getElementById("screen");
const buttons=document.querySelectorAll("section #buttons_container button");
const display=document.getElementById("display");
buttons.forEach(btn => {
    btn.onclick=()=>{
        if(btn.innerHTML=="C"){
            let l=screen.innerHTML.length;
            screen.innerHTML=screen.innerHTML.substring(0,l-1);
        }else if(btn.getAttribute('id')=="clear"){
            screen.innerHTML="";
        }
        else if(btn.innerHTML=="="){
            displayResult();
        }
        else{
            screen.innerHTML+=btn.innerHTML;
        }
    }
});
function displayResult(){
    let result=eval(screen.innerHTML);
    display.innerHTML="the result is : "+result;
}
