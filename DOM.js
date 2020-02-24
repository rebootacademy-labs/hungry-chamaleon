var wrapperGrasshopper = document.getElementById("wrapper-grasshopper")


var timerId = setInterval(function(){
  var x = Math.floor(Math.random()*(1000-120));
  var y = Math.floor(Math.random()*(430-80));
  var newGrasshopper = new Grasshopper("red", x, y)
  var divGrasshopper = newGrasshopper.show()
  wrapperGrasshopper.appendChild(divGrasshopper)
}, 5000)

