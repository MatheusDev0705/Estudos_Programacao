function getDiaSemanaTexto(diaSemana) {


  switch (diaSemana) {
  case 0:return "Domingo";
    case 1:return "Segunda";
    case 2:return "Terça";
    case 3:return "Quarta";
    case 4:return "Quinta";
    case 5:return "Sexta";
    case 6:return "Sábado";
    default:return "Não existe essa data";
  }
}
const data = new Date("1987-04-25 00:00:00");
let diaSemana = data.getDay();
console.log(getDiaSemanaTexto(diaSemana));
