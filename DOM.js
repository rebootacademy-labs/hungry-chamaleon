function getRandomColor(){
  var colors = ["red", "green", "blue", "yellow"];
  var randomNumber = Math.floor(Math.random()*4);
  return colors[randomNumber];
}

var wrapperGrasshopper = document.getElementById("wrapper-grasshopper");
setInterval(function(){
  var x = Math.floor(Math.random()*(1000-120));
  var y = Math.floor(Math.random()*(430-80));

  var newGrasshopper = new Grasshopper(getRandomColor(), x, y);
  var divGrasshopper = newGrasshopper.show();
  wrapperGrasshopper.appendChild(divGrasshopper);

  setTimeout(function() {
    divGrasshopper.remove();
  }, 1500);
}, 500);


var chamaleonHTLM = document.getElementsByClassName('chamaleon')[0]
var newChamaleon = new Chamaleon(getRandomColor(), chamaleonHTLM);
setInterval(function() {
  newChamaleon.changeColor(getRandomColor());
}, 1500);