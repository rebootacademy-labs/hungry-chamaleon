function getRandomColor(){
  var colors = ["red", "green", "blue", "yellow"];
  var randomNumber = Math.floor(Math.random()*4);
  return colors[randomNumber];
}

var wrapperGrasshopper = document.getElementById("wrapper-grasshopper");

setInterval(function(){
  var x = Math.floor(Math.random()*(1000-120));
  var y = Math.floor(Math.random()*(380-80)+100);

  var newGrasshopper = new Grasshopper(getRandomColor(), x, y);
  var divGrasshopper = newGrasshopper.show();
  wrapperGrasshopper.appendChild(divGrasshopper);

  setTimeout(function() {
    divGrasshopper.remove();
  }, 3000);
}, 500);


var chamaleonHTLM = document.getElementsByClassName('chamaleon')[0]
var newChamaleon = new Chamaleon(getRandomColor(), chamaleonHTLM);
setInterval(function() {
  newChamaleon.changeColor(getRandomColor());
}, 3000);

var wrapperlives = document.getElementsByClassName('lives');
var live1 = document.getElementById('live1');
var live2 = document.getElementById('live2');
var live3 = document.getElementById('live3');

var counter = document.getElementById('counter') ;
counter.innerHTML = 0;