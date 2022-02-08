/* 
 * Classe Teclado
 */
// arquivo: teclado.js
// Códigos de teclas
var SETA_ESQUERDA = 37;
var SETA_CIMA = 38;
var SETA_DIREITA = 39;
var SETA_BAIXO = 40;
var rapido = 16;

function Teclado(elemento) {
    this.elemento = elemento;
    // Array de teclas pressionadas
    this.pressionadas = [];
    // Registrando o estado das teclas no array
    var teclado = this;
    elemento.addEventListener('keydown', function(evento) {
    teclado.pressionadas[evento.keyCode] = true;
    });
    elemento.addEventListener('keyup', function(evento) {
    teclado.pressionadas[evento.keyCode] = false;
    });
}
Teclado.prototype = {
pressionada: function(tecla) {
    return this.pressionadas[tecla];
}
};
