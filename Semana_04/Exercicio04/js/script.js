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
    if (pegavalor.nome.length < 4 || pegavalor.nome.length > 50) {
        erroNome();
        document.getElementById('txtNome').classList.add('invalido');
    } else {
        document.getElementById('txtNome').classList.remove('invalido');
    } if (pegavalor.nome.length >= 4 && pegavalor.nome.length < 50) {
        document.getElementById('txtNome').classList.add('valido');
    } else {
        document.getElementById('txtNome').classList.remove('valido');
    }

    //SENHA 
    if (pegavalor.senha.length < 3 || pegavalor.senha.length > 50) {
        document.getElementById('txtSenha').classList.add('invalido');
        erroSenha();
    } else {
        document.getElementById('txtSenha').classList.remove('invalido');
    } if (pegavalor.senha.length >= 3 && pegavalor.senha.length < 50) {
        document.getElementById('txtSenha').classList.add('valido');
    } else {
        document.getElementById('txtSenha').classList.remove('valido');
    }

    //CONFIRMAR SENHA
    if (pegavalor.confirmsenha != pegavalor.senha) {
        erroconfSenha();
        document.getElementById('txtConfSenha').classList.add('invalido');
    } else {
        document.getElementById('txtConfSenha').classList.remove('invalido');
    } if (pegavalor.confirmsenha == pegavalor.senha) {
        document.getElementById('txtConfSenha').classList.add('valido');
    } else {
        document.getElementById('txtConfSenha').classList.remove('valido');
    }

    //EMAIL
    if (pegavalor.email.length < 3 || pegavalor.email.length > 50 || !/.+?\@.+?\..+/.test(pegavalor.email)) {
        document.getElementById('txtEmail').classList.add('invalido');
        erroEmail();
    } else {
        document.getElementById('txtEmail').classList.remove('invalido');
    }if(pegavalor.email.length > 3 && pegavalor.email.length < 50 && /.+?\@.+?\..+/.test(pegavalor.email)){
        document.getElementById('txtEmail').classList.add('valido');
    }else{
        document.getElementById('txtEmail').classList.remove('valido');
    }

    //GÊNERO
    if (pegavalor.genero == 'm' || pegavalor.genero == 'f') {
        document.getElementById('slGenero').classList.add('valido');

    }

    //DATA DE NASCIMENTO
    if (!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(pegavalor.datanasc)) {
        document.getElementById('txtDataNasc').classList.add('invalido');
        erroDatanasc();
    } else {
        document.getElementById('txtDataNasc').classList.remove('invalido');
    } if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(pegavalor.datanasc)) {
        document.getElementById('txtDataNasc').classList.add('valido');
    } else {
        document.getElementById('txtDataNasc').classList.remove('valido');
    }

    //ERROS
    if (erros.length > 0) {
        var mErro = document.getElementById('mErro');
        mErro.innerHTML = ''

        for (let i = 0; i < erros.length; i++) {
            var ul = document.createElement('ul');
            var li = document.createElement('li');
            li.innerHTML = erros[i];

            ul.appendChild(li)

            mErro.appendChild(ul)
        }
    }
    function erroNome() {
        erros.push('Digite um nome válido!')
    }

    function erroSenha() {
        erros.push('Digite uma senha válida!')
    }

    function erroconfSenha() {
        erros.push('A confirmação de senha não válida!')

    }

    function erroEmail() {
        erros.push('Email não válido!')
    }

    function erroDatanasc() {
        erros.push('Data de nascimento inválida')
    }
}
