// 1) Elaborar o exercício utilizando a estrutura ENQUANTO: Escreva um algoritmo para ler 2valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para osegundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeirovalor lido pelo segundo valor lido.

const prompt = require('prompt-sync')();

let x = Number(prompt("Digite o valor de X: "))
let z = Number(prompt("Digite o valor de Z: "))

while (z == 0) {
  z = Number(prompt("Digite outro valor maior que zero: "))
}

console.log(x / z);