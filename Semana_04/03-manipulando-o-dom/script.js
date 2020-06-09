'use strict'

clicado();


function clicado() {
    //getElementeById
    let nome = document.getElementById('txtNome');
    console.log(nome.value);

    //getByClass
    let classes = document.getElementsByClassName('lista');

    for (let i = 0; i < classes.length; i++) {
        //console.log(i+1); => exibe os indices
        //console.log(classes[i]);
        classes[i].innerHTML += ' **********';
        //let value = classes[i].innerHTML;//innerHTML insere tags and text, enquanto o innerText apenas o texto.
        //classes[i].innerHTML = value + ' **********';


    }

    /*    //Array
    let nomes = ['Marcos','Rodrigues'];
    console.log(nomes[1]);
    */

    //getByTagName

    var a = document.getElementsByTagName('a');

    for (let i = 0; i < a.length; i++) {
        if (!a[i].hasAttribute('target')) {
            if (a[i].getAttribute('href').indexOf('SatellaSoft') == -1) {
                a[i].setAttribute('target', '_blank')
                a[i].style.backgroundColor = 'red';
            }
        }

        console.log();

    }


}

//document.title = "Olha eu aqui!";

//document.location.href = "http://google.com";