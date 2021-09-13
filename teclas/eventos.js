var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var color = "#FFA"
document.addEventListener("keydown", dibujarTeclado);



console.log(document);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
var xmouse;
var ymouse;
var estado;

cuadrito.addEventListener("mousedown", dibujarMouse);
cuadrito.addEventListener("mousemove", moverMouse);
cuadrito.addEventListener("mouseup", levantarMouse);
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 3;
    papel.moveTo(xinicial,yinicial);
    papel.lineTo(xfinal,yfinal);
    papel.stroke();
    papel.closePath();
}

function dibujarMouse(evento)
{
    estado = 1
    xmouse = evento.offsetX;
    ymouse = evento.offsetY;
}

function moverMouse(evento)
{
    if(estado == 1)
    {
        dibujarLinea("blue",xmouse, ymouse, evento.offsetX, evento.offsetY);
    }else{
        xmouse = evento.offsetX;
        ymouse = evento.offsetY;
    }
}

function levantarMouse(evento)
{
    estado = 0;
}

function dibujarTeclado(evento)
{   
    var colorcito = "green";
    var movimiento = 1;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        default:
            console.log(evento);
        break;
    }
}

