function Solve(val) {
   var v = document.getElementById('result');
   v.value += val;
}
function resRes(){
  document.getElementById('result').style.color="yellow"
   document.getElementById("result").style.fontFamily="bold"
}
function Result() {
   var num1 = document.getElementById('result').value;
   var num2 = eval(num1);
   document.getElementById('result').value = num2;
   resRes()
}
function myFunction() {
  document.getElementById("result").style.color="whitesmoke"
   var inp = document.getElementById("result");
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('result');
   ev.value = ev.value.slice(0,-1);
}
