'use strict'

var acertos = 0;
var erros = 0;

var i = 0;
while (i < 5) {
    var meuNumero = prompt('Digite um numero de 0 a 10');
   
    let sort = Math.round(Math.random() * 10);
   
    console.log(sort);
   
    if (sort == meuNumero)
        acertos++;
    else
        erros++;
    i++;
}

document.write('<h1>Acertos: ' + acertos + ' ' + 'Erros: ' + erros + '</h1>');

/*
createElement('app', 10);
createElement('outro', 5);
function createElement(elemento, limite) {
    var app = document.getElementById(elemento);
    var ul = document.createElement('ul');
    for (let i = 0; i < limite; i++) {
        let li = document.createElement('li');
        li.innerText = 'Número ';

        let span = document.createElement('span');
        let valor = i + 1;
        span.innerText = valor < 10 ? '0' + valor : valor;
        span.style.fontWeight = 'bold';
        span.style.color = 'green';

        //span.setAttribute('style','font-weight: bold');

        ul.appendChild(li);
        li.appendChild(span);
    }

    app.appendChild(ul);
}
*/