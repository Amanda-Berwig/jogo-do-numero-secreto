
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
//chamando a função
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//possui parametro mas não possui retorno
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});


}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
//precisa chamar a função fora de qualquer função pra ela funcionar.
exibirMensagemInicial();




// função que não possui parametro nem retorno
function verificarChute () {
    let chute = document.querySelector("input").value
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
         let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p","O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}


// não possui parametro, mas possui retorno, um numero de 1 a 10
///declarando a função
function gerarNumeroAleatorio(){
     let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
     }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();

     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
     }

}

//quero verificar se na minha lista ja tem o numero escolhido
function limparCampo(){
    document.querySelector("input").value = "";
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}

 