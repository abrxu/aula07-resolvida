// 3) Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule eimprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura(0 a 10) para cada nota

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