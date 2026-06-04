// ! AULAS SOBRE O DOM
//  let texto = document.getElementById("1").style.color= 'blue'
//  console.log(texto)
//  texto.innerHTML="Texto Diferente"

//  document.getElementById(2).style.color = 'red'
 

//  document.getElementById("3").style.fontWeight="bold";
//  document.getElementById("3").style.color = 'purple';

//  let lista = document.getElementsByTagName("h1");
//  console.log(lista[1]);

//  let novo = document.createElement("p");
//  novo.textContent='Novo texto';
// document.body.appendChild(novo)


// novo.innerText= "Teste1"
// novo.style.fontWeight="bold";


//! FUNÇÃO PRA MUDAR TEXTO E COR DE UM HTML


// let butao = true

// function mensagem () {

//     if(butao) {
//        document.getElementById("Texto").innerText = "Valor verdadeiro"
//     document.getElementById("Texto").style.color = 'green'
//     }else {
//         document.getElementById("Texto").innerText = "Valor falso"
//     document.getElementById("Texto").style.color = 'red'
//     }
//     butao = !butao
// }


// !FUNÇÃO MUDAR COR AO PASSAR O MOUSE 

// function mudarCor (){
//     document.body.style.color = 'red';
    
// }

// !FUNÇÃO PEGAR VALOR E EXIBIR NO CONSOLE

// function pegarValor () {
//         document.getElementById("entrada").value
//     console.log("Mudança detectada")
// }

    // !FUNÇÃO ANÔNIMA

// const subtrair = (a,b)=> a-b;
// const somar =()=> {
//     let a = 9
//     let b = 10 
//     return a+b
// }
// console.log("resultado da subtração:"+ subtrair(10,6));

// !FUNÇÃO PRA MOSTRAR CURSO NO SELECT
function mostrarCurso(){
    let valor = document.getElementById("curso").value;
    document.getElementById("resultado").innerHTML =
    "Curso escolhido: " + valor;
}

let botao = document.getElementById("btn")
botao.addEventListener("click", function() {
    document.getElementById("evento").innerText = "Evento realizado com sucesso!!!"
});

