// Elaborar um algoritmo (pequeno sistema) envolvendo os conteúdos abordados nas aulas anteriores com o objetivo de propor uma solução para um problema real. Pode ser no contextode uma farmácia, locadora, itens de um mercado ou outro.O algoritmo deverá envolver funcionalidades envolvendo: variáveis, funções IF, Case,enquanto.O algoritmo deverá pedir algumas informações de entrada ao usuário e entregar respostas

const prompt = require('prompt-sync')();

let products = []
let question;

function showMenu() {
  console.log("Deseja adicionar um produto?"
    + "\n1. Sim"
    + "\n2. Não")
  question = Number(prompt("Digite a opção: "))
  return question
}

function productProcess() {
  let product = []
  productName = String(prompt("Digite o nome do produto: "))
  product.push(productName)
  productQuantity = Number(prompt("Insira a quantidade de " + productName + " a serem inseridos ao estoque: "))
  product.push(productQuantity)
  productUniqueValue = parseFloat(prompt("Insira o valor unitário do produto " + productName + ": "))
  product.push(productUniqueValue)
  products.push(product)
}

showMenu()

do {
  switch (question) {
    case 1:
      productProcess()
      showMenu()
      break;
    case 2:
      console.log("Sistema finalizado.")
      break;
    default:
      console.log("Opção inválida")
      break;
  }
  // showMenu()
} while (question == 1)

////////////////////////////

let contador = 0;
if (products.length > 0) {
  console.log("Número de produtos no sistema: " + (products.length - 1))
  for (let i = 0; i < products.length; i++) {
    contador++
    console.log("Produto #" + contador + ": ")
    console.log(products[i])
  }
}