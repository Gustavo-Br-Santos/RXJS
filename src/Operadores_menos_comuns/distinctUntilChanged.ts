// distinctUntilChanged

// Não emite quando o valor anterior for o mesmo, porém só faz uma comparação do valor atual com o anterior.

// distinct
// Não emite novamente os valores que anteriormente já foram emitidos
// Distinct compara valor e tipo ( === )

import { from, of } from "rxjs";
import { distinct, distinctUntilChanged, tap } from "rxjs/operators";

const numeros$ = of(1, 1, 3, 3, 3,  2, 2, 4, 4, 5, 3, 1, 2, 7, 5, 7, 8)

numeros$.pipe(distinctUntilChanged()).subscribe(console.log)

interface Personagem {
    nome: string
}

const personagens: Personagem[] = [
    {nome: 'Megamen'},
    {nome: 'Optimus'},
    {nome: 'Optimus'},
    {nome: 'Megatron'},
    {nome: 'Homem-aranha'},
    {nome: 'Tony-Stark'},
    {nome: 'Tony-Stark'},
    {nome: 'Batman'},
    {nome: 'Coringa'},
    {nome: 'Hulk'},
    {nome: 'Megatron'},
    {nome: 'Optimus'},
    {nome: 'Coringa'},
    {nome: 'Coringa'},
    {nome: 'Coringa'},
    {nome: 'Coringa'},
] 

// Emissão Comum:
console.log('Sem distinctUntilChanged:')
from(personagens).subscribe(console.log);

// Emissão sem repetição de personagem
console.log('Com distinctUntilChanged: ')
from(personagens)
.pipe(
    distinctUntilChanged((anterior, atual) => anterior.nome === atual.nome) // Pega os nomes dos personagens e irá fazer a comparação do último valor recebido com o atual
)
.subscribe(console.log);
