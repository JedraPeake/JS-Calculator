var box = document.getElementById('display');
var ans = 0;

function toScreen(x){
  box.value +=x;
  if(x === 'c'){
    box.value='';
  }
}

function equal(){
  x = box.value;
  var check = "Ans";
  if(x.indexOf(check) !== -1){
     x = x.split('Ans').join(ans);
  }
  x = eval(x);
  box.value = x;
  ans =x;
}

function power(){
  x =box.value;
  x = eval(x*x);
  box.value = x;
}

function backSpace(){
  var x = box.value;
  var n = x.length-1;
  var newNum = x.substring(0,n);
  box.value = newNum;
}