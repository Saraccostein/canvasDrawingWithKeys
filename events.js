/* Draw zone */
var paint = document.getElementById('área_de_dibujo');
var canvas_area = paint.getContext('2d');
var initial_thick = 4;

/* Styles */
var green   = '#06EE9E';
var purple  = '#5555FF';
var white   = '#D0E0FF';

var canvas_color = green;  /*🟢🟣⚪*/
var line_width = 4;
var canvas_cap = 'round';  /* ■ butt ■ | ● round ● | ■ square ■ */
var movement = 15;

function changeColor(input_color)
{
    canvas_color = input_color;
}

function changeThick(input_width)
{
    line_width = input_width;
}

/* Initial point */
var x = 250;
var y = 250;
dibujarLínea(green, 8.5, 'round', 250, 250, 250, 250, canvas_area);

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
    DOWN: 40,  /* ↓ */

    A: 65, /* ← */
    W: 87, /* ↑ */
    D: 68, /* → */
    S: 83  /* ↓ */
};

document.addEventListener('keydown', dibujarTeclado);

function dibujarTeclado(event)
{

    switch(event.keyCode)
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



    case tecla.A:  /* ← */
        dibujarLínea(canvas_color, line_width, canvas_cap, x, y, x - movement, y, canvas_area);
        x = x - movement;
    break;

    case tecla.W:    /* ↑ */
        dibujarLínea(canvas_color, line_width, canvas_cap, x, y, x, y - movement, canvas_area);
        y = y - movement;
    break;

    case tecla.D: /* → */
        dibujarLínea(canvas_color, line_width, canvas_cap, x, y, x + movement, y, canvas_area);
        x = x + movement;
    break;

    case tecla.S:  /* ↓ */
        dibujarLínea(canvas_color, line_width, canvas_cap, x, y, x, y + movement, canvas_area);
        y = y + movement;   
    break;


    }
   /* if(tecla == UP)
    {
        dibujarLínea(canvas_color, line_width, canvas_cap, x, y, x - movement, y - movement, canvas_area);
    x = x - movement;
    y = y - movement;
    } */
}

var drawing = false;
var drawzone = paint.getBoundingClientRect();

paint.addEventListener('mousedown', calc);
paint.addEventListener('mousemove', drawingWithMouseMovement)
paint.addEventListener('mouseup', reset)

function calc(event)
{
    x_mouse = event.clientX - drawzone.left;
    y_mouse = event.clientY - drawzone.top;
    drawing = true;
}

function drawingWithMouseMovement(event)
{
    if (drawing === true)
    {
        dibujarLínea(canvas_color, line_width, canvas_cap, x_mouse, y_mouse, event.clientX - drawzone.left, y_mouse = event.clientY - drawzone.top, canvas_area);
        x_mouse = event.clientX - drawzone.left;
        y_mouse = event.clientY - drawzone.top;
    }
}

function reset(event)
{
    dibujarLínea(canvas_color, line_width, canvas_cap, x_mouse, y_mouse, event.clientX - drawzone.left, y_mouse = event.clientY - drawzone.top, canvas_area);
    x_mouse = 0;
    y_mouse = 0;
    drawing = false;
}