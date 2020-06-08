'use strict'

var idade = prompt('Qual a sua idade?');

if (idade >= 18) {
    let resposta = confirm('Você deseja comprar o ingresso?')
    if (resposta)
        alert('Okay, entrou.');
    else 
        alert ('Okey, voce saiu.');

} else {
    alert('Você não pode entrar.');
}
/*
var obj={

    nome: 'Sejuani',
    idade: 34,
    trabalha:'sim'
}

//console.log(obj);
console.table(obj);

const idade = 25;
var nome = 'Marcos';

//alert(idade);

if (1 + 1 == 2) {

    let nome = 'Angel';
    alert(nome);

}
*/