/* 
 * Classe Fundo
 */
function Fundo(context){
    this.context = context;
}
Fundo.prototype = {
desenharFundo: function(){
    /* 
     *Codifique uma cor de fundo para o Canvas 
     */
    var ctx = this.context;
    var elm = document.getElementById("canvas_sonic");
    var ctx = elm.getContext("2d");
    
    var img = new Image();
    img.src = "fundo.jpg";
    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    
},
    
limparTela: function() {
    var ctx = this.context; // Só para facilitar a escrita ;)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
};
