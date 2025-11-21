// * Variaveis globais

let qtdCliques = 0;

// Ao carregar a pagina, executa a função do cronometro
window.onload = ()=>{
    cronometro();
}

//* Função para lidar com o clique do botão 
function handleClick(){
    qtdCliques++; // Mesma coisa que qtdCliques = qtdCliques + 1 
    atualizaContador();
    geraPosicaoBotao();
}

//Gera uma nova -posição pra o botão
function geraPosicaoBotao(){
    let botao = document.getElementById('botao');
    botao.style.position = 'absolute';
    botao.style.left = ((Math.random()*75)+10)+'%';
    botao.style.top = ((Math.random()*75)+10)+'%';
}

//Gera valor aleatorio para posicao
function getraPosicaoAleatoria(min,max){
    return((Math.random()*max)+min)+'%'
}


// Atualiza o contador na tela 
function atualizaContador(){
    let container = document.getElementById('quantidade-cliques');
    console.log(container)
    container.innerText = qtdCliques;
}

let segundos = 1; 

//Cronometro de execução 
function cronometro(){
    setTimeout(()=>{
        atualizaCronometro();
        calculaCliquesPorMinuto()
        atualizaCPM();

        segundos++;

        cronometro();
    },1000)
 }

 function atualizaCronometro(){
    let elemento_cronometro = document.getElementById('cronometro')
    elemento_cronometro.innerText = segundos;
 }

 let cliquesPorMinuto = 0;

 // Calcular Cliques por minuto 
 function calculaCliquesPorMinuto(){
    cliquesPorMinuto = (qtdCliques/(segundos/60)).toFixed();
 }

 // Atualiza o CPM 
 function atualizaCPM(){
    let contador = document.getElementById('cpm')
        cpm.innerText = cliquesPorMinuto;

 }