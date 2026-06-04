alert("Pedra Papel e Tesoura")

let escolha1 = prompt("Jogador 1:").toLowerCase()
let escolha2 = prompt("Jogador 2:").toLowerCase()

    if (escolha1 == "pedra" && escolha2 == "tesoura"){
        console.log("Pedra ganhou")
        
        } else if (escolha2 == "pedra" && escolha1 == "tesoura") {
            console.log("Pedra ganhou")

        } else if (escolha1 == "tesoura" && escolha2 == "papel") {
            console.log("Tesoura ganhou")

        } else if (escolha2 == "tesoura" && escolha1 == "papel") {
            console.log("Tesoura ganhou")

        } else if (escolha1 == "pedra" && escolha2 == "papel") {
            console.log("Papel venceu")

        } else if (escolha2 == "pedra" && escolha1 == "papel"){
        console.log("papel venceu")

    };