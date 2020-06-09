'use stricts'

var app = document.getElementById('app');

var ul = document.createElement('ul');

//ul.innerHTML = '<li>teste</li><li>teste</li><li>teste</li><li>teste</li><li>teste</li>';
//app.appendChild(ul);

for (let i = 0; i < 15; i++) {
    let li = document.createElement('li');
    li.innerText = 'Número ';

    let span = document.createElement('span');
    let valor = i+1;
    span.innerText = valor < 10 ? '0' + valor : valor;
    span.style.fontWeight = 'bold';
    span.style.color = 'green';

    //span.setAttribute('style','font-weight: bold');

    ul.appendChild(li);
    li.appendChild(span);
}

app.appendChild(ul);