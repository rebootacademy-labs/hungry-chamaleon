var wrapperGrasshopper = document.getElementById("wrapper-grasshopper")

var intervalGrasshopper = setInterval(function(){
  var x = Math.floor(Math.random()*(1000-120));
  var y = Math.floor(Math.random()*(430-80));
  var colors = ["red", "green", "blue", "yellow"]
  var randomNumber = Math.floor(Math.random()*4)
  var newGrasshopper = new Grasshopper(colors[randomNumber], x, y)
  var divGrasshopper = newGrasshopper.show()
  wrapperGrasshopper.appendChild(divGrasshopper)
  var outGrasshopper = setTimeout(() => {
    divGrasshopper.remove();
  }, 3000);
}, 1000);




var wrapperChamaleon = document.getElementById("wrapper-chamaleon")

var intervalChamaleon = setInterval(function(){
  var colores = ["rojo", "verde", "azul", "amarillo"]
  var randomNumbers = Math.floor(Math.random()*4);
  var newChamaleon = new Chamaleon(colores[randomNumbers]);
  var divChamaleon = newChamaleon.show();
  wrapperChamaleon.appendChild(divChamaleon);
}, 1000)
