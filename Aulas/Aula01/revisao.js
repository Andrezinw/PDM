// variaveis

let local = [10];

const imutavel = 10;

imutavel.push(20);

// funcoes

function soma (a, b) {
    return a + b;
}

// arrow function

const soma2 = (a, b) => a + b;

console.log(soma(2, 3));
consloe.log(soma2(2,3));

// arrays
const frutas = [];
frutas.push(...["uva", "maca"]);
frutas.forEach(fruta => console.log(fruta))
const achou = futas.find((fruta) => fruta ==="banana")
console.log(achou);

// objects

const pessoa = {id:1, nome: "jose", sexo: "M"};
console.log(pessoa.nome);
const { nome, sexo } = pessoa;
console.log(nome, sexo);

// modulos

export default frutas;
export {achou, soma}

import frutas from 'revisao'
import { achou } from 'revisao'

