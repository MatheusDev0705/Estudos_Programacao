let a = Number(prompt("Digite o valor de um lado"))
let b = Number(prompt("Digite o valor de um lado"))
let c = Number(prompt("Digite o valor de um lado"))

console.log("Número digitados: " + a, b, c);

    if (a + b > c && a + c > b && b + c >a) {
    console.log("Formam um triangulo")

        if (a == b && b == c) {
            console.log("Triangualo Equilátero")
        }else if(a == b || a == c || b == c) {
            console.log("Triangulo Isóceles")
        }else{
            console.log("Triangulo escaleno")
        }
    }else{
        console.log("Não forma um triangulo")
    }

