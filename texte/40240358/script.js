let nomeJogador = prompt("Qual o seu nome?");
let tempo = 0,
  timer;
let respondidas = 0;

function mostrarPromptJogador() {
  const jogador = document.querySelector("#jogo").classList;
  const admin = document.querySelector("#admin").classList;
  if (nomeJogador.toLowerCase() === "admin") {
    admin.remove("hidden");
  } else {
    jogador.remove("hidden");
    criarGrelha();
  }
}

function criarGrelha() {
  const gridEL = document.querySelector("#grelha");

  for (item of perguntas) {
    gridEL.innerHTML += `<div class="cell"style="border: solid black 1px;color="" >${item.categoria} </div>`;
  }
}

function mostrarPergunta(categoria, celula) {
  const perguntaConatinerEL = document.querySelector(
    "#perguntaConatainer"
  ).classList;
  perguntaConatinerEL.remove("hidden");
  const perguntaEL = document.querySelector("#perguntaTexto");
  const respostasEL = document.querySelector("#respostas");

  perguntaEL.innerHTML = celula.pergunta;
  respostasEL.innerHTML = celula.respostas.join("\n");
  iniciarContador();
}

function validarResposta(resposta, pergunta, celula) {}

function iniciarContador() {
  timer = setInterval(() => {
    tempo++;
    document.getElementById("contador").textContent = `Tempo: ${tempo}s`;
  }, 1000);
}

function registarTempo() {}

function atualizarLeaderboard() {}

function atualizarTabelaAdmin() {}

document
  .getElementById("btnAdicionarPergunta")
  .addEventListener("click", adicionarPergunta);

function adicionarPergunta() {}
window.onload = mostrarPromptJogador;
