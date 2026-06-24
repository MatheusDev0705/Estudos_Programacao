const formulario = document.querySelector("#formulario-notas");
const msg = document.querySelector("#msg");
function notasEvento(e) {
  e.preventDefault();
  const nota1 = Number(document.querySelector("#nota1").value);
  const nota2 = Number(document.querySelector("#nota2").value);
  const nota3 = Number(document.querySelector("#nota3").value);

  if (!nota1 || !nota2 || !nota3) {
    msg.textContent = "Dados inválidos";
    msg.style.color = "red";
    return;
  }
  
  function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
  const media = calcularMedia(nota1, nota2, nota3);

  msg.style.color = "black";
  if (media < 5)
    msg.textContent = `Reprovado| Sua nota é : ${media.toFixed(2)}`;
  if (media >= 5 && media <= 6.9)
    msg.textContent = `Recuperação| Sua nota é : ${media.toFixed(2)}`;
  if (media >= 7 && media <= 8.9)
    msg.textContent = `Aprovado| Sua nota é : ${media.toFixed(2)}`;
  if (media >= 9 && media <= 10)
    msg.textContent = `Excelente| Sua nota é : ${media.toFixed(2)}`;
}



formulario.addEventListener("submit", notasEvento);
