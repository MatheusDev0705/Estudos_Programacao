function candidatar(){

const canditados = ["ana", "bruno", "carla"]

let votoAna = 0
let votosBruno = 0
let votosCarla = 0

for (let i= 1; i<=5; i++) {
    let votos = prompt("Digite em quem você deseja votar:")
    if(canditados.includes(votos)) {
        if(votos == 'ana') {
            votoAna++;
        }else if(votos == 'bruno') {
            votosBruno++
    }else if (votos == 'carla') {
        votosCarla++
    }
        }
    }

let votos_ana = document.getElementById("votos_Ana");
let votos_bruno = document.getElementById("votos_Bruno");
let votos_carla = document.getElementById("votos_Carla")


votos_ana.textContent = "Ana:"  + votoAna;
votos_bruno.textContent = "Bruno:" + votosBruno;
votos_carla.textContent = "Carla:"  + votosCarla;

}