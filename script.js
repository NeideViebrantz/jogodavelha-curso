const tabuleiro = document.getElementById("tabuleiro");
const status = document.getElementById("status");

let jogador = "X";
let jogo = ["","","","","","","","",""];
let ativo = true;

const vitorias = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

function criarTabuleiro(){
    tabuleiro.innerHTML = "";

    jogo.forEach((valor, i)=>{
        const celula = document.createElement("div");
        celula.classList.add("celula");
        celula.innerText = valor;

        celula.addEventListener("click", ()=>{
            jogar(i);
        });

        tabuleiro.appendChild(celula);
    });

    if(ativo){
        status.innerText = "Vez do jogador " + jogador;
    }
}

function jogar(i){
    if(jogo[i] !== "" || !ativo) return;

    jogo[i] = jogador;

    if(verificarVitoria()){
        status.innerText = "Jogador " + jogador + " venceu!";
        ativo = false;
    } 
    else if(!jogo.includes("")){
        status.innerText = "Empate!";
        ativo = false;
    } 
    else{
        jogador = jogador === "X" ? "O" : "X";
        status.innerText = "Vez do jogador " + jogador;
    }

    criarTabuleiro();
}

function verificarVitoria(){
    return vitorias.some(comb=>{
        return comb.every(i=> jogo[i] === jogador);
    });
}

function reiniciar(){
    jogo = ["","","","","","","","",""];
    jogador = "X";
    ativo = true;
    criarTabuleiro();
}

criarTabuleiro();