import _ from 'underscore';

import { crearDeck, pedirCarta, acumularPuntos, turnoComputadora, crearCarta, inicializaJuego} from "./usecases";

// patron modulo se ejecuta por si mismo
  let deck    = [];
  const tipos = ['C','D','H','S'],    
   especiales = ['A','J','Q','K'];

   const btnPedir = document.querySelector('#btnPedir'), 
    btnDetener = document.querySelector('#btnDetener'), 
    btnNuevo = document.querySelector('#btnNuevo'),
    puntosJugadorHTML = document.querySelectorAll('small'), // toma los elementos smalls
    divCartasJugadores = document.querySelectorAll('.divCarta');

  let puntosJugadores = [0,0];
  
  deck= crearDeck(tipos, especiales);
  console.log(deck);
  
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      // 0 primer jugador
      let puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosJugadorHTML);
      crearCarta(carta, 0, divCartasJugadores);

      if(puntosJugador>21){
          console.warn('Lo siento mucho, perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          console.log("deck pedir: "+deck)
          turnoComputadora(puntosJugador, deck, puntosJugadores.length-1, puntosJugadores,  puntosJugadorHTML, divCartasJugadores);
      } else if (puntosJugador===21) {
          console.warn('21, genial!');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          console.log("deck pedir: "+deck)
          turnoComputadora(puntosJugador, deck, puntosJugadores.length-1, puntosJugadores,  puntosJugadorHTML, divCartasJugadores);
      }

      // console.log(small[0])
  }); //la funcion(){} es un argumento de otra funcion que es conocida como callback

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      console.log("puntosJugadores[0]: "+puntosJugadores[0], "\ndeck: " +deck, "\n puntosJugadores.length-1: "+(puntosJugadores.length-(1)), "\npuntosJugadorHTML: "+puntosJugadorHTML, divCartasJugadores);
      turnoComputadora(puntosJugadores[0], deck, puntosJugadores.length-1, puntosJugadores, puntosJugadorHTML, divCartasJugadores);
  });

  
  btnNuevo.addEventListener('click', () => {
   
      inicializaJuego(2, puntosJugadores, puntosJugadorHTML, divCartasJugadores, btnPedir, btnDetener);
      console.log("deck inicializar: "+deck)
      
  });

//   return {
//       nuevoJuego: inicializaJuego, //no ejecuto solo lo paso como referencia
//   };

