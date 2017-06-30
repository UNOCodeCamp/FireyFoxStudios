var canvas = document.getElementById("viewport");
var ctx = canvas.getContext("2d");

var scene = new Image();
scene.src = "Firey Fox Background.gf";

ctx.drawImage(scene,0,0,  500, 500);