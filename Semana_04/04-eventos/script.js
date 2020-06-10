'use strict'

var maxlenght = 150;

function contaCoractere() {

    let text = document.getElementById('txtMensagem');

    let contador = maxlenght - text.value.length;

    let caracteres = document.getElementById('caracteres');

    caracteres.innerText = contador;

    if (contador < 0) {
        caracteres.style.color = 'red';
        text.style.border = '10px, solid, red';
    } else {
        caracteres.style.color = 'yellow';
        text.style.border = '10px, solid, yellow';
    }

}

function enviaForm(){
    alert('');
}