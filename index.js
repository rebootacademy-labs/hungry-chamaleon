function Grasshopper(color, posX, posY) {
  this.html = document.createElement("div")
  this.color = color;
  this.posX = posX;
  this.posY = posY;

  this.show = function () {
    this.html.classList.add("grasshopper");
    this.html.style.top = this.posY+"px";
    this.html.style.left = this.posX+"px";
    console.log(this.html)
    var that = this;
    this.html.onclick = function () {
      that.html.classList.add("hide");
    }
    return this.html;
  }
}