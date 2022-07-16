/* Draw zone */
var paint = document.getElementById('área_de_dibujo');
var canvas_area = paint.getContext('2d');

/* Styles */
var green = '#06EE9E';
var purple = '#5555FF';
var canvas_color = green;  /*🌈🎨*/
var line_width = 3;
var canvas_cap = 'round';  /* ■ butt ■ */ /* ● round ● */ /* ■ square ■ */
var movement = 10;

/* Initial point */
var x = 250;
var y = 250;
dibujarLínea(green, 7, 'round', 250, 250, 250, 250, canvas_area);

function dibujarLínea(color, width, cap, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.lineWidth = width;
    lienzo.lineCap = cap;
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final)
    /* lienzo.bezierCurveTo(anti_x_izq, anti_y_izq, anti_x_der, anti_y_der, x_final, y_final); */
    lienzo.stroke();
    lienzo.closePath();
}

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
        dibujarLínea(canvas_color, line_width, canvas_cap, x, y, x - movement, y, canvas_area);
        x = x - movement;
    break;

    case tecla.UP:    /* ↑ */
        dibujarLínea(canvas_color, line_width, canvas_cap, x, y, x, y - movement, canvas_area);
        y = y - movement;
    break;

    case tecla.RIGHT: /* → */
        dibujarLínea(canvas_color, line_width, canvas_cap, x, y, x + movement, y, canvas_area);
        x = x + movement;
    break;

    case tecla.DOWN:  /* ↓ */
        dibujarLínea(canvas_color, line_width, canvas_cap, x, y, x, y + movement, canvas_area);
        y = y + movement;
    break;

    default:
        console.log('Tecla MISCÉLANEA oprimida');
    break;
    }
}