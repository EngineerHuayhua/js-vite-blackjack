/**
// Esta funcion me permite extraer la primera carta del array
 * @param {Array<string>} deck es un arreglo de String - Ejemplo: ['C','D','H','S']
 * @returns {String} retorna la carta del deck Ejemplo: 'C'
 */
export const pedirCarta = (deck) =>{
    if (!deck || deck.length===0) {
        // muestra el mensaje en la consola y termina
        throw new Error('No hay cartas en el deck');
    }      
    // const carta = deck.pop();
    return deck.shift();
}