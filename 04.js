// 4) No exercício anterior [exercício 3], acrescente uma mensagem 'NOVO CÁLCULO (S/N)?' ao final do exercício 03. Se for respondido 'S' deve retornar e executar um novo cálculo, casocontrário deverá encerrar o algoritmo

const prompt = require('prompt-sync')();

let A = parseFloat(prompt("Qual a nota 1A do aluno? "))
let B = parseFloat(prompt("Qual a nota 2A do aluno? "))

while (A > 10 || A < 0) {
  A = parseFloat(prompt("Valor abaixo de zero ou acima de dez. Informe outra nota 1A: "))
}

while (B > 10 || B < 0) {
  B = parseFloat(prompt("Valor abaixo de zero ou acima de dez. Informe outra nota 2A: "))
}

let media = (A + B) / 2
console.log(media)

let pergunta = String(prompt("Novo cálculo (S/N)? "))

do {
  A = parseFloat(prompt("Qual a nota 1A do aluno? "))
  B = parseFloat(prompt("Qual a nota 2A do aluno? "))

  while (A > 10 || A < 0) {
    A = parseFloat(prompt("Valor abaixo de zero ou acima de dez. Informe outra nota 1A: "))
  }

  while (B > 10 || B < 0) {
    B = parseFloat(prompt("Valor abaixo de zero ou acima de dez. Informe outra nota 2A: "))
  }

  media = (A + B) / 2
  console.log("Nova média: " + media)

} while (pergunta == "S")

console.log("\nPROGRAMA ENCERRADO")