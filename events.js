var paint = document.getElementById(área_de_dibujo);
var lienzo = paint.getContext('2d');

function dibujarLínea(color, x_inicial, y_inicial, anti_x_izq, anti_y_izq, anti_x_der, anti_y_der, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.lineWidth = 4;
    lienzo.lineCap ='round';
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    /* lienzo.bezierCurveTo(anti_x_izq, anti_y_izq, anti_x_der, anti_y_der, x_final, y_final); */
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLínea('#06EE9E', 250, 250, lienzo);

var tecla = 
{
    LEFT: 37,  /* ← */
    UP: 38,    /* ↑ */
    RIGHT: 39, /* → */
    DOWN: 40   /* ↓ */
};

document.addEventListener('keydown', dibujarTeclado);

function dibujarTeclado(evento)
{
    switch(evento.keyCode)
    {

    case tecla.LEFT:  /* ← */
        console.log('Tecla LEFT oprimida');
    break;

    case tecla.UP:    /* ↑ */
        console.log('Tecla UP oprimida');
    break;

    case tecla.RIGHT: /* → */
        console.log('Tecla RIGHT oprimida');
    break;

    case tecla.DOWN:  /* ↓ */
        console.log('Tecla DOWN oprimida');
    break;

    default:
        console.log('Tecla MISCÉLANEA oprimida');
    break;
    }
}