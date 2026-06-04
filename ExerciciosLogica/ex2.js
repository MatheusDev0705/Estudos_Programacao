let peso = prompt("Digite seu peso:");
let altura = prompt("Digite sua altura:");

let imc = peso /(altura ** 2)

console.log("Seu IMC:" +imc)

if (imc<=18.49) {
    console.log("Abaixo do peso")
}else if (imc < 24.99) {
    console.log("peso normal")
}else if (imc > 24.99) {
    console.log("Sobrepeso")
}


    
