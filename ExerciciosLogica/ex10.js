let compra = Number (prompt("Digite o valor da sua compra"))

if(compra > 1000) {
    compra = compra - (compra * 0.15)
console.log(compra)


}else if (compra > 500) {
    compra = compra - (compra * 0.10)
console.log(compra)

}else if (compra> 100) {
    compra = compra - (compra * 0.05)
console.log(compra)
}