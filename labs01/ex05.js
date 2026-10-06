const processarMensagem = (mensagem, callback) => callback(mensagem);


const formatarInstabilidade = (msg) => `*** Atenção: ${msg} ***`;
console.log(processarMensagem("Sistema instável!", formatarInstabilidade));


const contarCaracteres = (msg) => `Resumo: A mensagem contém ${msg.length} caracteres.`;
console.log(processarMensagem("Esta mensagem tem caracteres", contarCaracteres));


const analisarCaixaTexto = (msg) => {
  if (msg === msg.toLowerCase()) return `Mensagem em caixa baixa: ${msg}`;
  if (msg === msg.toUpperCase()) return `Mensagem em caixa alta: ${msg}`;
  return `Mensagem mista: ${msg}`;
};
console.log(processarMensagem("tudo em minúsculas", analisarCaixaTexto));