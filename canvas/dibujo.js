var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton1");
boton.addEventListener("click", dibujoPorClick);
var d=document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var lineas1 = 30;
var l = 0;
var n = 0;
var yi, xf;
var color1 = "#FAA";
console.log (window);
for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea(color1,0,yi,xf,300);
}

for(n = 0; n < lineas1; n++)
{
    yi = 10 * n;
    xf = 10 * (n+1);
    dibujarLinea(color1,300,yi,xf,0);
}

dibujarLinea(color1, 1, 1, 1, 299);
dibujarLinea(color1, 1, 299, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoPorClick()
{
    alert("No me toques ahi");
}