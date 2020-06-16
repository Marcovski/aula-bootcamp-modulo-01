'use strict';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formCadastro').addEventListener('submit', (event) => {
        var pegavalor = pegarValor();
        if (!validando(pegavalor))
            event.preventDefault();
    });
});
//FUNÇÕES

function pegarValor() {
    var obj = {
        nome: document.getElementById('txtNome').value,
        email: document.getElementById('txtEmail').value,
        senha: document.getElementById('txtSenha').value,
        confirmsenha: document.getElementById('txtConfSenha').value,
        genero: document.getElementById('slGenero').value,
        datanasc: document.getElementById('txtDataNasc').value,
        sobre: document.getElementById('txtSobre').value
    };
    return obj;
}
function validando(pegavalor) {
    var erros = [];
    //NOME
    if (pegavalor.nome.length < 3 || pegavalor.nome.length > 50) {
        document.getElementById('txtNome').classList.add('invalido');
        erros.push(erroNome());
    } else {
        document.getElementById('txtNome').classList.add('valido');
    }
    //SENHA 
    if (pegavalor.senha.length < 3 || pegavalor.senha.length > 50) {
        document.getElementById('txtSenha').classList.add('invalido');
        erros.push(erroSenha());
    } else {
        document.getElementById('txtSenha').classList.add('valido');
    }
    //CONFIRMAR SENHA
    if (pegavalor.confirmsenha.length < 3 || pegavalor.confirmsenha.length > 50) {
        document.getElementById('txtConfSenha').classList.add('invalido');
        erros.push(erroconfSenha());
    } else {
        document.getElementById('txtConfSenha').classList.add('valido');
    }
    //EMAIL
    if (pegavalor.email.length < 3 || pegavalor.email.length > 50 || !/.+?\@.+?\..+/.test(pegavalor.email)) {
        document.getElementById('txtEmail').classList.add('invalido');
        erros.push(erroEmail());
    } else {
        document.getElementById('txtEmail').classList.add('valido');
    }
    //GÊNERO
    if (pegavalor.genero == 'm' || pegavalor.genero.value == 'f') {
        document.getElementById('slGenero').classList.add('valido');

    }
    //DATA

    //Erros

    if (erros.length > 0) {


        let li = document.getElementById('mErro');
        li.innerHTML = '';

        for (var i = 0; i < erros.length; i++) {
        
            li.innerHTML = erros[i];
        }

    }else{
        return true
    }

}


var mErro = document.getElementById('mErro');

var ul = document.createElement('ul');


function erroNome() {
    let li = document.createElement('li');
    li.innerText = 'Digite um nome válido!';

    ul.appendChild(li);

    mErro.appendChild(ul);
}

function erroSenha() {
    let li = document.createElement('li');

    li.innerText = 'Digite uma senha válida!';

    ul.appendChild(li);

    mErro.appendChild(ul);
}

function erroconfSenha() {

    let li = document.createElement('li');

    li.innerText = 'A confirmação de senha não válida!';

    ul.appendChild(li);

    mErro.appendChild(ul);
}

function erroEmail() {

    let li = document.createElement('li');

    li.innerText = 'Email não válido!';

    ul.appendChild(li);

    mErro.appendChild(ul);
}
