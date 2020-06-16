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
        erros.push('Informe um nome válido. Mínimo de 3 caracteres e máximo de 50 caracteres.')
        document.getElementById('txtNome').classList.add('invalido');
    } else {
        document.getElementById('txtNome').classList.remove('invalido');
    } if (pegavalor.nome.length >= 3 && pegavalor.nome.length < 50) {
        document.getElementById('txtNome').classList.add('valido');
    } else {
        document.getElementById('txtNome').classList.remove('valido')
    }

    /*VALIDAÇAO DA SENHA*/
    if (pegavalor.senha.length < 7 || pegavalor.senha.length > 100) {
        erros.push('Informe uma senha válida. Mínimo de 7 e máximo de 100 caracteres.')
        document.getElementById('txtSenha').classList.add('invalido');
    } else {
        document.getElementById('txtSenha').classList.remove('invalido');
    }
    if (pegavalor.senha.length >= 7 && pegavalor.senha.length < 100) {
        document.getElementById('txtSenha').classList.add('valido');
    } else {
        document.getElementById('txtSenha').classList.remove('valido');
    }

    /*CONFIRMAÇÃO DE SENHA */
    if (pegavalor.confirmarsenha < 1 || pegavalor.confirmarsenha != pegavalor.senha) {
        erros.push('Senhas informadas diferentes.')
        document.getElementById('txtConfSenha').classList.add('invalido');
    } else
        document.getElementById('txtConfSenha').classList.remove('invalido')

    if (pegavalor.confirmarsenha == pegavalor.senha && pegavalor.confirmarsenha > 1) {
        document.getElementById('txtConfSenha').classList.add('valido');
    } else {
        document.getElementById('txtConfSenha').classList.remove('valido');
    }

    //EMAIL
    if (pegavalor.email.length < 3 || pegavalor.email.length > 50 || !/.+?\@.+?\..+/.test(pegavalor.email)) {
        document.getElementById('txtEmail').classList.add('invalido');
        erros.push(erroEmail());
    } else {
        document.getElementById('txtEmail').classList.remove('invalido');
    } if (pegavalor.email.length < 3 || pegavalor.email.length > 50 || !/.+?\@.+?\..+/.test(pegavalor.email)) {
        document.getElementById('txtEmail').classList.add('valido');
    } else {
        document.getElementById('txtEmail').classList.remove('valido');
    }

}
//GÊNERO
if (pegavalor.genero == 'm' || pegavalor.genero == 'f') {
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

} else {
    
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
