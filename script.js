// => EXERCÍCIO 1
function somaNumeros() {
    let numero = Number(prompt('Digite um número'));
    let soma = 0;
    while (numero !== 0) {
        soma += numero;
        numero = Number(prompt('Digite um número'));
    }
    console.log(soma);
}
// somaNumeros();

// => EXERCÍCIO 2
function imprimeNumerosAteNumeroEscolhido() {
    let numeroEscolhido = Number(prompt('Digite um número'));

    for (let i = 0; i <= numeroEscolhido; i++) {
        console.log(i);
    }
}
// imprimeNumerosAteNumeroEscolhido();

// => EXERCÍCIO 3
function imprimeMsgArray(array) {
    console.log(array);

    for (let i = 0; i < array.length; i++) {
        console.log(`O elemento de índice ${i} é ${array[i]}`);
    }
}
const numeros = [10, 2, 4, 7, 8, 2, 1];
// imprimeMsgArray(numeros);

// => EXERCÍCIO DE FIXAÇÃO PARTE I
function permiteAdm() {
    let tipoDeUsuario = prompt('Qual tipo de usuário vc é?').toUpperCase();

    while (tipoDeUsuario !== 'A') {
        console.log('Acesso Negado');
        tipoDeUsuario = prompt(
            'Digite novamente o seu tipo de usuário'
        ).toUpperCase();
    }

    console.log('Boas vindas, admin!');
}
// permiteAdm();

// => EXERCÍCIO DE FIXAÇÃO PARTE II
function executaTabuada() {
    for (let i = 1; i <= 10; i++) {
        console.log(`
        ${numero} * ${i} = ${numero * i} 
        `);
    }
}
let numero = 2;
// executaTabuada();

// => EXERCÍCIO DE FIXAÇÃO PARTE III
function imprimeValoresArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`
        ${array[i].toUpperCase()}
        `);
    }
}
const minhaArray = [
    'Amanda',
    'Luan',
    'Pizza',
    'Rj',
    'Praia',
    'Filhos',
    'Felicidade',
    'Amor',
];
// imprimeValoresArray(minhaArray);
