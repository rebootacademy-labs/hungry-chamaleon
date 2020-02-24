var wrapperGrasshopper = document.getElementById("wrapper-grasshopper")


var timerId = setInterval(function(){
  var x = function getpositionArbitrary(x) {
    return Math.random() * (0 - 1000);
  };
  var y = function getpositionArbitrary(y) {
    return Math.random() * (0 - 630);
  };
  var newGrasshopper2 = new Grasshopper("red", x, y)
  var divGrasshopper2 = newGrasshopper2.show()
  wrapperGrasshopper.appendChild(divGrasshopper2)
}, 5000)

