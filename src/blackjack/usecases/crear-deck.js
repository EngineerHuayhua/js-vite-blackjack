// ya no puedes importar de manera global
import { shuffle } from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {array<String>} tiposDeCarta - Ejemplo: ['C','D','H','S']
 * @param {array<String>} tiposEspeciales - Ejemplo: ['A','J','Q','K']
 * @returns {array<String>} Array
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('tiposDeCarta es obligatorio de tipo string');
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio de tipo string');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for( let tipo of tiposDeCarta ){
            deck.push(i + tipo);
        }
    }
    
    for(let tipo of tiposDeCarta){
        for(let especial of tiposEspeciales){
            deck.push(especial + tipo);
        }
    }
    deck = shuffle(deck);
    return deck;
};

// esto para exporta por defecto y se debe recibir sin llaves
// export default crearDeck;