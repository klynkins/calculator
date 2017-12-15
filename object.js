/* global x */
var disp = document.getElementById("display");

function toScreen(x) {
   disp.value += x; 
   if(x==="ce"){
       disp.value="";
   }
}

function answer() {
    x = disp.value
    x = eval(x);
    disp.value = x;
}

function sqrt() {
    x = disp.value
    x = Math.sqrt(x);
    disp.value = x; 
}

function backspace() {
    var num = disp.value;
    var len = num.length-1;
    var newNum = num.substring(0,len);
    disp.value = newNum;
}