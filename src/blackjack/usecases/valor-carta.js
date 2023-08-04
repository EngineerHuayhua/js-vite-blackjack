/**
 * Toma el valor de la carta y lo devuelve en numero
 * @param {String} carta - Ejemplo: 'A'
 * @returns {Number} valor de la carta Number - Ejemplo: 10
 */
export const valorCarta = (carta) =>{
    const valor = carta.substring(0,carta.length-1);
    // 2 = 2  10=10, 3=3 
    return (isNaN(valor)) ?
    (valor==='A') ? 11 : 10 
    : valor*1;
};