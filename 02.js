// 2) Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício anterior [exercício 01] caso osegundo valor informado seja ZERO

const prompt = require('prompt-sync')();

let x = Number(prompt("Digite o valor de X: "))
let z = Number(prompt("Digite o valor de Z: "))

while (z == 0) {
  console.log("VALOR INVÁLIDO")
  z = Number(prompt("Digite outro valor maior que zero: "))
}

console.log(x / z);