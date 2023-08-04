import { valorCarta } from "./index";
// import { puntosJugadorHTML } from "./referencias-html";



// Turno: 0 = primer jugador y el ultimo la computadora
/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {String} puntosJugadores 
 * @returns 
 */
export const acumularPuntos = (carta,turno, puntosJugadores, puntosJugadorHTML) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosJugadorHTML[turno].innerText = puntosJugadores[turno];
    
    console.log(puntosJugadores[turno]);
    return puntosJugadores[turno];
};