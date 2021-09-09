var d=document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(50,10);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath();