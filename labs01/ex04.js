const jogador1 = { nome: "Pelé", clube: "Santos" };
const jogador2 = { nome: "Zico", clube: "Flamengo" };

function exibirInfoJogador() {
  console.log(`O jogador ${this.nome} atua pelo clube ${this.clube}.`);
}

const infoJogador1 = exibirInfoJogador.bind(jogador1);
const infoJogador2 = exibirInfoJogador.bind(jogador2);

infoJogador1();
infoJogador2();