var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton1");
var color_sel = document.getElementById("color_ppal");
boton.addEventListener("click", dibujoPorClick);
var d=document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

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
    var lineas = parseInt(texto.value);
    var lineas1 = parseInt(texto.value);
    var l = 0;
    var n = 0;
    var yi, xf;
    var color1 = color_sel.value;
    var espacio = ancho/lineas
    console.log (window);
    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l+1);
        dibujarLinea(color1,0,yi,xf,300);
    }

    for(n = 0; n < lineas1; n++)
    {
        yi = espacio * n;
        xf = espacio * (n+1);
        dibujarLinea(color1,300,yi,xf,0);
    }

    dibujarLinea(color1, 1, 1, 1, ancho-1);
    dibujarLinea(color1, 1, ancho-1, ancho-1, ancho-1);  
}