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