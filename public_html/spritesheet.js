/* 
 * Classe SpriteSheet
 */
function Spritesheet(context, imagem, linhas, colunas) {
    this.context = context;
    this.imagem = imagem;
    this.numLinhas = linhas;
    this.numColunas = colunas;
    this.intervalo = 0;
    this.linha = 0;
    this.coluna = 0;
}
Spritesheet.prototype = {
proximoQuadro: function() {
    // Momento atual
    var agora = new Date().getTime();
    // Se ainda não tem último tempo medido
    if (! this.ultimoTempo) this.ultimoTempo = agora;
    // Já é hora de mudar de coluna?
    if (agora - this.ultimoTempo < this.intervalo) return;
    if (this.coluna < this.numColunas - 1)
    this.coluna++;
    else
    this.coluna = 0;
    // Guardar hora da última mudança
    this.ultimoTempo = agora;
},
pular:function(){
      
},
desenhar: function(x, y) {
    //Construa nesta linha um objeto da classe Fundo
    //Nesta linha faça a chamada do método desenhar para o objeto da Classe Fundo.
    var fundo = new Fundo(context);
    fundo.desenharFundo();
    var larguraQuadro = this.imagem.width / this.numColunas;
    var alturaQuadro = this.imagem.height / this.numLinhas;
    this.context.drawImage(this.imagem,larguraQuadro * this.coluna,alturaQuadro * this.linha,
    larguraQuadro,
    alturaQuadro,
    x,
    y,
    larguraQuadro,
    alturaQuadro
    );
}
};