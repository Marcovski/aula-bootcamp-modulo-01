'use strict'

var game = {
    cor: 'Preto',
    tamanho: '8cmx8cmx2.5cm',
    estado: 'Funciona',
    jogos: [
        {
            nome: 'Harvet Moon Back to Nature',
            preco: '100rR$',
            descricao: 'e legal',
            modelo: 'SP'

        },
        {
            nome: 'Pokemon TGC',
            preco: '110rR$',
            descricao: 'e legal tambem',
            modelo: 'Game Boy Color'
        },


    ]
};

setHtml('spCor', game.cor);
setHtml('spTamanho', game.tamanho);
setHtml('spModelo', game.modelo);
setHtml('spEstado', game.estado);

createTable(game.jogos);




function createTable(obj) {
    let tdoby = document.getElementById('tbody');
    tbody.innerHTML = ' ';
    console.log(obj);


    for (let i = 0; i < obj.length; i++) {
        let data = obj[i];
        tbody.innerHTML += '<tr>' +
            '<td>' + data.nome + '</td>' +
            '<td>' + data.preco + '</td>' +
            '<td>' + data.descricao + '</td>' +
            '<td>' + data.modelo + '</td>' +
            '</tr>';

    }
}

//JSON
var json = { "cor": "Preto", "tamanho": "8cmx8cmx2.5cm", "estado": "Funciona", "jogos": [{ "nome": "Harvet Moon Back to Nature", "preco": "100rR$", "descricao": "e legal", "modelo": "SP" }, { "nome": "Pokemon TGC", "preco": "110rR$", "descricao": "e legal tambem", "modelo": "Game Boy Color" }] }
console.log( typeof json);

json = JSON.parse(json);
console.log(typeof json);

function setHtml(el, value) {
    document.getElementById(el).innerHTML = value;
}

//console.log(Array.isArray(game.jogos));

