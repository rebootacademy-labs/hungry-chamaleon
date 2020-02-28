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

    var grasshopperSound = new Audio('./sounds/aparicion.saltamontes.mp3')
    grasshopperSound.play()
    
    this.html.onclick = function (e) {
      var chamaleonHTLM = document.getElementsByClassName('chamaleon')[0].classList[1]
      var grasshopperColor = e.target.classList[1]

      var colorValueChamaleon = chamaleonHTLM.split("-");
      var colorValueGrasshopper = grasshopperColor.split("-");

      if (colorValueChamaleon[1] != colorValueGrasshopper[1]) {
        var looseLive = new Audio('./sounds/risa-pierde-vidas.mp3')
        looseLive.play()
        var wrapperlives = document.getElementById('lives');
        if (wrapperlives.children.length != 1){
          wrapperlives.children[0].remove()
        } else {
          wrapperlives.children[0].remove()
          game.stop()
          var gameOver = document.getElementById('game-over');
          var portada1 = document.getElementById('portada');
          gameOver.classList.remove("desactivar");
          portada1.classList.add("desactivar");
          container.classList.add("desactivar");
          var botonTry = document.getElementById('botonOver');
          botonTry.onclick = function() {
            location.reload();
          }
        }
      } else {
        const B = Math.abs(500 - that.posX);
        const A = 700 - that.posY;
        var angle = Math.PI/2 - Math.atan(A/B);
        if (that.posX < 500) {
          angle *= -1
        }
        
        var tongue = document.getElementById('tongue');
        tongue.style.transform = `rotate(${angle}rad)`

        var tongue_height = 0;

        let timerId = setInterval(function(){
          tongue.style.height = `${tongue_height += 30}px`;
          tongue.style.bottom = `-${tongue_height/2}px`;
          if (tongue_height >= (700-that.posY)*2){ 
            clearInterval(timerId);
            let timerId2 = setInterval(function(){
              tongue.style.height = `${tongue_height -= 30}px`;
              tongue.style.bottom = `-${tongue_height/2}px`;
              if (tongue_height < 10) {
                clearInterval(timerId2);
              }
            }.bind(this),1)
          }
        }.bind(this),1)

        var eat = new Audio('./sounds/lengua-camaleon.m4a')
        eat.play()
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


function getRandomColor(){
  var colors = ["red", "green", "blue", "yellow"];
  var randomNumber = Math.floor(Math.random()*4);
  return colors[randomNumber];
}

function Game() {

  this.grasshoperInterval;
  this.chamaleonInterval;
  this.startMusic;

  this.init = function() {
    this.startMusic = new Audio('./sounds/sonido-fondo.mp3')
    this.startMusic.loop = true
    this.startMusic.play()
    
    var wrapperGrasshopper = document.getElementById("wrapper-grasshopper");
    
    this.grasshoperInterval = setInterval(function(){
      var x = Math.floor(Math.random()*(1000-120));
      var y = Math.floor(Math.random()*(380-80)+100);
    
      var newGrasshopper = new Grasshopper(getRandomColor(), x, y);
      var divGrasshopper = newGrasshopper.show();
      wrapperGrasshopper.appendChild(divGrasshopper);
    
      setTimeout(function() {
        divGrasshopper.remove();
      }, 3000);
    }, 1000);
    
    var chamaleonHTLM = document.getElementsByClassName('chamaleon')[0]
    var newChamaleon = new Chamaleon(getRandomColor(), chamaleonHTLM);
    
    this.chamaleonInterval = setInterval(function() {
      newChamaleon.changeColor(getRandomColor());
    }, 2000);
    
    var counter = document.getElementById('counter') ;
    counter.innerHTML = 0;
  }

  this.stop = function() {
    this.startMusic.pause()
    clearInterval(this.chamaleonInterval)
    clearInterval(this.grasshoperInterval)
  }
}

var game = new Game()

var start = document.getElementById('btn-play')
var portada = document.getElementById('portada')
var container = document.getElementById('container')
container.style.display = 'none'

start.onclick = function () {
  portada.style.display = 'none'
  container.style.display = ''
  game.init()
}



