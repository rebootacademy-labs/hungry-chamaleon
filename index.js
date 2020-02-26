function Grasshopper(color, posX, posY) {
  this.html = document.createElement("div")
  this.color = color;
  this.posX = posX;
  this.posY = posY;
  this.lives = 3

  var that = this
  this.show = function () {
    this.html.classList.add("grasshopper");
    this.html.classList.add(`g-${this.color}`);
    this.html.style.top = this.posY+"px";
    this.html.style.left = this.posX+"px";
    
    this.html.onclick = function (e) {
      var chamaleonHTLM = document.getElementsByClassName('chamaleon')[0].classList[1]
      var grasshopperColor = e.target.classList[1]

      var colorValueChamaleon = chamaleonHTLM.split("-");
      var colorValueGrasshopper = grasshopperColor.split("-");

      if (colorValueChamaleon[1] != colorValueGrasshopper[1]) {
        var wrapperlives = document.getElementById('lives');
        if (wrapperlives.children.length != 1){
          wrapperlives.children[0].remove()
        } else {
          wrapperlives.children[0].remove()
          alert('LOOOOOOOSER')
        }
      } 
      if (colorValueChamaleon[1] == colorValueGrasshopper[1]) {
        var counter = document.getElementById('counter');
        counter.innerHTML++;
      }  
      that.html.remove()
    }
    return this.html;
  }
}

function Chamaleon(color, html) {
  this.html = html
  this.color = color;
  this.html.classList.add(`c-${color}`);

  this.changeColor = function(newColor) {
    var colorRemove = this.html.classList[1].split("-")[1]
    this.html.classList.remove(`c-${colorRemove}`);
    this.html.classList.add(`c-${newColor}`);

  }
}