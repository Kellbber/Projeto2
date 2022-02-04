const prompt = require('prompt-sync')();
console.log();
console.log('Bem-vindo ao KENPO-CASTLE! Aqui você jogará um JOKENPO no estilo medieval!');
console.log();
console.log();
let nome_jogador = prompt('Digite o seu nome: ').trim();
let reino_jogador = prompt('Digite o seu Reino: ').trim();
console.log();
console.log(`[JUIZ]: Olá, nobre ${nome_jogador}! Seja bem-vindo(a) à minha taverna! Como anda ${reino_jogador}? Fazia tempo que não lhe via!
Enfim, vamos iniciar o campeonato anual de JOKENPO medieval!`);
console.log();
console.log(`[JUIZ]: Como é o primeiro dia, só temos um inscrito junto com você! O seu adversário é o Cavaleio Godze do reino de Azedron!`)
console.log();
console.log(`[JUIZ]: ${nome_jogador} as regras são simples:

1- PEDRA ganha de TESOURA mas perde para PAPEL;
2- TESOURA ganha de PAPEL mas perde para PEDRA;
3- PAPEL ganha de PEDRA mas perde para TESOURA.`);
console.log();
console.log(`[JUIZ]: Regras simples pra quem vem de ${reino_jogador} não acha?`);
console.log();
console.log('[JUIZ]: Ah, mais uma coisa... Você joga na mesma hora que Godze para evitar trapaças! Terá também um placar para ir vendo quem está ganhando ou perdendo!');
console.log();

const computador = ['PEDRA',['TESOURA'],['PAPEL']];
console.log();
let respostaWhile = '';

while(respostaWhile!='N'){

let contaRodadas=0;
let UsuarioVitoria = 0;
let empate= 0;
let ComputadorVitoria =  0;


let QuantasRodadas='';
let numeroAleatorio = '';
let respostaAleatorio = '';
let UsuarioEscolha ='';

while(true){
    console.log('Você só pode digitar números em RODADAS!')
    QuantasRodadas=prompt('Digite a quantidade de RODADAS que você irá apostar: ').trim();

    if(!isNaN(QuantasRodadas) && QuantasRodadas>0 && QuantasRodadas % 1 == 0 && QuantasRodadas.length !=0){
        break;
    }
    console.log(`Você deve digitar um número válido!`);
}
console.log();
console.log(`[JUIZ]: VAMOS PRO JOGO! BOA SORTE, ${nome_jogador}!`)
console.log();
    for(let i=0; i<parseInt(QuantasRodadas);i++){
    console.log(`              *ROUND ${i+1}*`)
    console.log();
    contaRodadas++;
    numeroAleatorio = [Math.floor((Math.random() * computador.length))]
    respostaAleatorio = computador[numeroAleatorio];
    console.log();
    while(UsuarioEscolha!='PEDRA'|| UsuarioEscolha!='TESOURA'|| UsuarioEscolha!='PAPEL'){
    console.log();
    console.log();
    UsuarioEscolha = prompt(`${nome_jogador}, escolha entre: PEDRA, TESOURA ou PAPEL: `).toUpperCase().trim();
    if(UsuarioEscolha=='PEDRA'||UsuarioEscolha=='TESOURA'||UsuarioEscolha=='PAPEL')
    break;
    }
    console.log();
    if(respostaAleatorio==UsuarioEscolha){
        console.log();
        console.log(`[JUIZ] ${nome_jogador}, você escolheu ${UsuarioEscolha} e Godze ${respostaAleatorio} e vocês empataram!`);
        console.log();
        empate++;
        
    }
    else if ((respostaAleatorio=='PEDRA' && UsuarioEscolha =='PAPEL') || respostaAleatorio=='TESOURA' && UsuarioEscolha=='PEDRA' || respostaAleatorio=='PAPEL' && UsuarioEscolha=='TESOURA'){
        console.log();
       console.log(`[JUIZ] ${nome_jogador}, você escolheu ${UsuarioEscolha} e o Godze ${respostaAleatorio} e você ganhou essa rodada!`);
       console.log();
        UsuarioVitoria++;
        
    }
    else{
        console.log();
        console.log(`[JUIZ] ${nome_jogador}, você escolheu ${UsuarioEscolha} e o Godze ${respostaAleatorio} e você perdeu essa rodada...`);
        console.log();
        ComputadorVitoria++;
        
    }
    console.log(`${nome_jogador} venceu: ${UsuarioVitoria} -- Godze venceu: ${ComputadorVitoria} -- EMPATES: ${empate}`);
    console.log();
    }
    console.log();     
console.log();
console.log(`[JUIZ] No final de tudo, jogamos ${contaRodadas} rodadas eletrizantes`)
console.log();

if(UsuarioVitoria>ComputadorVitoria){
    console.log();
    console.log(`[JUIZ] PARABÉNS, ${nome_jogador}! Você ganhou: ${UsuarioVitoria}, o Godze ${ComputadorVitoria} e teve ${empate} empates!`);
    console.log();
    console.log(`${nome_jogador}, do reino de ${reino_jogador}, É O(a) NOVO(a) CAMPEÃO(ã)`);
    console.log();
}else if(UsuarioVitoria==ComputadorVitoria){
    console.log();
    console.log(` [JUIZ] ${nome_jogador}, você venceu ${UsuarioVitoria} e o Godze ${ComputadorVitoria} e terminou em EMPATE!`)
    console.log();
}
else{
    console.log();
    console.log(`[JUIZ] ${nome_jogador}, infelizmente não teves sorte hoje. Você ganhou ${UsuarioVitoria} e o Godze ganhou ${ComputadorVitoria}, os empates deram: ${empate}`)
    console.log();
    console.log('Godze, do reino de Azedron, É O NOVO CAMPEÃO!');
    console.log();
}
while(respostaWhile!='S'||respostaWhile!='N'){
    respostaWhile=prompt('Deseja jogar mais uma partida? [S] ou [N]: ').toUpperCase().trim();
    console.clear()
    if(respostaWhile=='S'|| respostaWhile=='N'){
        break;
    }   
    }
console.log();
}
console.log(`Obrigado por ter jogado, ${nome_jogador}! Dúvidas, susgestões e etc -> kellbberbarcarolo@gmail.com `);
console.log();


