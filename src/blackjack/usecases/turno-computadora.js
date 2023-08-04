import { pedirCarta, acumularPuntos, crearCarta, determinarGanador} from "./index";


// Turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {*} computadora 
 * @param {HTMLElement} puntosJugadorHTML 
 * @param {*} divCartasJugadores 
 */
export const turnoComputadora = (puntosMinimos, deck, computadora, puntosJugadores, puntosJugadorHTML, divCartasJugadores) => {
    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if(!deck) throw new Error('El deck es necesario');
    if(!puntosJugadorHTML) throw new Error('El argumento puntosJugadorHTML es necesario');
    // puntosMinimos son puntos de jugador
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        // aqui se llama para acumular puntos
        puntosComputadora= acumularPuntos(carta, computadora, puntosJugadores, puntosJugadorHTML);
        // el turno es igual a puntosJugadores.length-1
        crearCarta(carta, computadora, divCartasJugadores);
        
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosMinimos, puntosComputadora);

};