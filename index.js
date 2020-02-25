function Grasshopper(color, posX, posY) {
  this.html = document.createElement("div")
  this.color = color;
  this.posX = posX;
  this.posY = posY;

  this.show = function () {
    this.html.classList.add("grasshopper");
    this.html.classList.add(`g-${this.color}`);
    this.html.style.top = this.posY+"px";
    this.html.style.left = this.posX+"px";
    
    var that = this;
    this.html.onclick = function (e) {
      var chamaleonHTLM = document.getElementsByClassName('chamaleon')[0].classList[1]
      var grasshopperColor = e.target.classList[1]

      var colorValueChamaleon = chamaleonHTLM.split("-")
      var 
      
      
      
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