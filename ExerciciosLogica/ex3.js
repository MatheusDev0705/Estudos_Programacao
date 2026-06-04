let minutos = prompt("Digite um valor em minutos");

let  horas = minutos/60
let resto_horas = minutos%60
console.log( minutos +  " minutos = " + horas.toFixed(0) +" horas e " + (resto_horas) + " minutos");