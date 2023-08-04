

// Esta funcion inicializa el juego
export const inicializaJuego = (numJugadores = 2, puntosJugadores, puntosJugadorHTML, divCartasJugadores, btnPedir, btnDetener) => {
    //   deck = crearDeck();

      console.clear();
      // inicializa cada elemento del array con el valor 0.
      for (let i = 0; i < numJugadores; i++) {
            console.log("puntosJugadores"+puntosJugadores)
          puntosJugadores[i]=0;
      }

      puntosJugadorHTML.forEach( elem => elem.innerText=0);
      // puntosJugadorHTML[0].innerText = 0;
      // puntosJugadorHTML[1].innerText = 0;
      
      divCartasJugadores.forEach( elem => elem.innerText='');
      // divCartasComputadora.innerHTML = '';
      // divCartasJugador.innerHTML = '';

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }
