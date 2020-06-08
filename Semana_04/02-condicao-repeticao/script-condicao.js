var numero = prompt('Digite um número de 1 a 7');

numero = parseInt(numero)

console.log(typeof numero);

switch (numero) {
    case 1:
        console.log('Segunda');

        break;
    case 2:
        console.log('Terça');

        break;
    case 3:
        console.log('Quarta');

        break;
    case 4:
        console.log('Quinta');

        break;
    case 5:
        console.log('Sexta');

        break;
    case 6:
        console.log('Sabado');

        break;
    case 7:
        console.log('Domingo');

        break;
    default:
        console.log('Dia da semna inválido!');
}

/*
//debugger;
if (numero == 1) {
  //  true || false
    if (!confirm('algo')){
        alert('Cancelado');

    }



}


if (numero==1) {
    console.log('1');

}else if (numero >=1 && numero<= 5) {
    console.log('Correto')

}else {
    console.log('Algum outro');
}
*/