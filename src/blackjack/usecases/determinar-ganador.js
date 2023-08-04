

export const determinarGanador = (puntosMinimos, puntosComputadora) => {

    // const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        let mensaje = (puntosMinimos>21 && puntosComputadora<=21) ? 'La computadora gana' 
            : (puntosMinimos===21 && puntosComputadora>21) ? 'Ganaste'
            : (puntosMinimos===puntosComputadora) ? 'Nadie Gana'
            : (puntosMinimos<puntosComputadora && puntosMinimos<21 && puntosComputadora<=21) ? 'La computadora gana':'Ganaste';

            alert(mensaje);
    }, 200);

}