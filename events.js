/* Draw zone */
var paint = document.getElementById('área_de_dibujo');
var canvas_area = paint.getContext('2d');
var initial_thick = 4;

/* Styles */
var black   = '#1c1c22';
var gray    = '#25323d';
var white   = '#D0E0FF';
var green   = '#06EE9E';
var purple  = '#5555FF';
var blue    = '#3F3DFF';

var color = green;

/* 🟢 */
var green_button = document.getElementById(green_input);
green_input.addEventListener("click", changeColorToGreen);

function changeColorToGreen()
{
    color = green;
}

/* 🟣 */
var purple_button = document.getElementById(purple_input);
purple_input.addEventListener("click", changeColorToPurple);

function changeColorToPurple()
{
    color = purple;
}

/* ⚪ */
var white_button = document.getElementById(white_input);
white_input.addEventListener("click", changeColorToWhite);

function changeColorToWhite()
{
    color = white;
}

/* 🤖 */
var eraser_button = document.getElementById(eraser_input);
eraser_input.addEventListener("click", changeColorToEraser);

function changeColorToEraser()
{
    color = gray;
}

/* Thick */
var line_width = 4;
var canvas_cap = 'round';  /* ■ butt ■ | ● round ● | ■ square ■ */
var movement = 15;

function changeThick(input_width)
{
    line_width = input_width;
}

/* Keyboard */
var x = 250;
var y = 250;

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
    dibujarLínea(green, 8.5, 'round', 250, 250, 250, 250, canvas_area);

    switch(event.keyCode)
    {


    case tecla.LEFT:  /* ← */
        dibujarLínea(color, line_width, canvas_cap, x, y, x - movement, y, canvas_area);
        x = x - movement;
    break;

    case tecla.UP:    /* ↑ */
        dibujarLínea(color, line_width, canvas_cap, x, y, x, y - movement, canvas_area);
        y = y - movement;
    break;

    case tecla.RIGHT: /* → */
        dibujarLínea(color, line_width, canvas_cap, x, y, x + movement, y, canvas_area);
        x = x + movement;
    break;

    case tecla.DOWN:  /* ↓ */
        dibujarLínea(color, line_width, canvas_cap, x, y, x, y + movement, canvas_area);
        y = y + movement;   
    break;



    case tecla.A:  /* ← */
        dibujarLínea(color, line_width, canvas_cap, x, y, x - movement, y, canvas_area);
        x = x - movement;
    break;

    case tecla.W:    /* ↑ */
        dibujarLínea(color, line_width, canvas_cap, x, y, x, y - movement, canvas_area);
        y = y - movement;
    break;

    case tecla.D: /* → */
        dibujarLínea(color, line_width, canvas_cap, x, y, x + movement, y, canvas_area);
        x = x + movement;
    break;

    case tecla.S:  /* ↓ */
        dibujarLínea(color, line_width, canvas_cap, x, y, x, y + movement, canvas_area);
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


/* Mouse  */
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
        dibujarLínea(color, line_width, canvas_cap, x_mouse, y_mouse, event.clientX - drawzone.left, y_mouse = event.clientY - drawzone.top, canvas_area);
        x_mouse = event.clientX - drawzone.left;
        y_mouse = event.clientY - drawzone.top;
    }
}

function reset(event)
{
    dibujarLínea(color, line_width, canvas_cap, x_mouse, y_mouse, event.clientX - drawzone.left, y_mouse = event.clientY - drawzone.top, canvas_area);
    x_mouse = 0;
    y_mouse = 0;
    drawing = false;
}

/* Fin („• ᴗ •„) */

/* 
            ／＞　 フ
           | 　_　_| 
          ／` ミ＿xノ 
         /　　　　 |
        /　 ヽ　　 ﾉ
        │　　|　|　|
    ／￣|　　 |　|　|
    (￣ヽ＿_ヽ_)__)
     ＼二)
*/