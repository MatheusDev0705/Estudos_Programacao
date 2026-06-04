let numero1 = Number(prompt("Digite um número"));
let numero2 = Number(prompt("Digite um número"));
let numero3 = Number(prompt("Digite um número"));
let numero4 = Number(prompt("Digite um número"));
console.log("Número digitados: " + numero1, numero2, numero3, numero4)

    
if(numero1 < numero2 && numero1 < numero3 && numero1 < numero4) {
    console.log(numero1 + "é o menor")
}else if(numero2 <  numero1 && numero2 < numero3 && numero2 < numero4 ){
    console.log (numero2 + "é o menor")
}else if(numero3 < numero1 && numero3 < numero2 && numero3 < numero4) {
    console.log(numero3 + "é o menor")
}else if(numero4 < numero1 && numero4 < numero2 && numero4 < numero3) {
      console.log(numero4 + "é o menor" )
}
  

