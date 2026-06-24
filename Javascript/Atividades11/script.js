const pessoas = {
  nome: "Matheus",
  sobrenome: "Matos",
  idade: 19,
  profissao: "Programador BackEnd",
  endereco: {
    rua: "Rua ibiapaba",
    numero: 251,
    cidade: "Rio de Janeiro/RJ",
  },
};
const {rua} = pessoas.endereco;
console.log('Rua:',rua);
