function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return `${num1} é o maior`;
  } else if (num2 > num1) {
    return `${num2} é o maior`;
  }
}
console.log(maiorNumero(1000, 20));
