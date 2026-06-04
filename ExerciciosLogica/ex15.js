let senha_correta = 123

for(tentativa = 1; tentativa <=3; tentativa++){
    let senha = Number(prompt("Digite sua senha"))
if (senha_correta == senha) {
    console.log("Login realizado com Sucesso!")
   tentativa = 4
}else {
    console.log("Senha incorreta!")
}};
