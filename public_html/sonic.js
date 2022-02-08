/* 
 *Classe Sonic
 */
var SONIC_DIREITA = 1;
var SONIC_ESQUERDA = 2;
var SONIC_CIMA = 3;
var SONIC_BAIXO = 0;

function Sonic(context, teclado, imagem) {
    this.context = context;
    this.teclado = teclado;
    this.imagem=imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 2;
    this.linhas=4;
    this.colunas=4;
    this.larguraSprite;
    this.sheet = new Spritesheet(context, imagem, this.linhas, this.colunas);
    this.animacao = new Animacao(context);
    this.sheet.intervalo = 60;
    this.andando = false;
}
Sonic.prototype = {
atualizar: function() {
   /*
    * Codifique o evento para quando a tecla SETA_ACIMA for pressionada
    * caso tenha sido pressionada deve ser verificada se a direção do
    * Sonic está voltada para a direita ou esquerda.
    * Se o Sonic estiver voltado para a direita, use a imagem do Sonic que está na
    * coluna 0 e linha 1, caso contrário, use a imagem que está na coluna 7 e linha 2
    * (Lembre-se que no JavaScript o índice começa em zero).
    */
    if (this.teclado.pressionada(rapido)){
        this.velocidade = 6;
    } else{
        this.velocidade = 2;
    }
    if (this.teclado.pressionada(SETA_DIREITA)) {
    // Se já não estava neste estado...
        if (! this.andando || this.direcao !== SONIC_DIREITA) {
            // Seleciono o quadro da spritesheet
            this.sheet.linha = 2;
            this.sheet.coluna = 0;
        }
        // Configuro o estado atual
        this.andando = true;
        this.direcao = SONIC_DIREITA;
        if(this.x >=context.canvas.width)
            this.x=-40;
        // Neste estado, a animação da spritesheet deve rodar
        this.sheet.proximoQuadro();
        // Desloco o Sonic
        this.x += this.velocidade;

    }
    else if (this.teclado.pressionada(SETA_ESQUERDA)) {
        if (! this.andando || this.direcao !== SONIC_ESQUERDA) {
            this.sheet.linha = 1; // Atenção, aqui será 2!
            this.sheet.coluna = 0;
        }
        this.andando = true;
        this.direcao = SONIC_ESQUERDA;
        var larguraSprite = this.imagem.width/this.colunas;
        if(this.x<= -larguraSprite)
            this.x=context.canvas.width;
       
        this.sheet.proximoQuadro();
        this.x -= this.velocidade; // E aqui é sinal de menos!
    }
    
    else if (this.teclado.pressionada(SETA_CIMA)) {
    // Se já não estava neste estado...
        if (! this.andando || this.direcao !== SONIC_CIMA) {
            // Seleciono o quadro da spritesheet
            this.sheet.linha = 3;
            this.sheet.coluna = 0;
        }
        // Configuro o estado atual
        this.andando = true;
        this.direcao = SONIC_CIMA;
        if(this.y <=-20)
            this.y=-20;
        // Neste estado, a animação da spritesheet deve rodar
        this.sheet.proximoQuadro();
        // Desloco o Sonic
        this.y -= this.velocidade;

    }
    
    else if (this.teclado.pressionada(SETA_BAIXO)) {
    // Se já não estava neste estado...
        if (! this.andando || this.direcao !== SONIC_BAIXO) {
            // Seleciono o quadro da spritesheet
            this.sheet.linha = 0;
            this.sheet.coluna = 0;
        }
        // Configuro o estado atual
        this.andando = true;
        this.direcao = SONIC_BAIXO;
        if(this.y >= context.canvas.height-48)
            this.y = context.canvas.height-48;
        // Neste estado, a animação da spritesheet deve rodar
        this.sheet.proximoQuadro();
        // Desloco o Sonic
        this.y += this.velocidade;

    }
    
    else {
   
    if (this.direcao === SONIC_DIREITA){
        
        this.sheet.coluna = 0;
    }
    else if (this.direcao === SONIC_ESQUERDA)
        this.sheet.coluna = 0;
    this.sheet.linha = 0;
    this.andando = false;
    }
    
   
},
desenhar: function() {
    this.sheet.desenhar(this.x, this.y);
}
};

