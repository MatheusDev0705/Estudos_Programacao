// const tresHoras = 60 * 60 * 3 *1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
// const data = new Date(1781053822686);
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); //Mês começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da Semana', data.getDay());
// console.log(Date.now())

// console.log(data.toString());

function zeroEsq (num) {
    return num >=10 ? num : `0${num}`;
}

function formataData (data){
    const dia = zeroEsq(data.getDate());
    const mes = zeroEsq(data.getMonth() + 1);
    const ano = zeroEsq(data.getFullYear());
    const hora = zeroEsq(data.getHours());
    const min = zeroEsq(data.getMinutes());
    const seg = zeroEsq(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil);