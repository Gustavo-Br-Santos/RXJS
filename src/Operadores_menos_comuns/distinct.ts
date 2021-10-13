// distinct
// Não emite novamente os valores que anteriormente já foram emitidos
// Distinct compara valor e tipo ( === )

import { from, of } from "rxjs";
import { distinct, tap } from "rxjs/operators";

const numeros$ = of(1, '1', 3, 3, 2, 2, 4, 4, 5, 3, 1, 2, 7, 5, 7, 8, '1')

numeros$.pipe(distinct()).subscribe(console.log)

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
] 

// Emissão Comum:
console.log('Sem distinct:')
from(personagens).subscribe(console.log);

// Emissão sem repetição de personagem
console.log('Com distinct: ')
from(personagens)
.pipe(
    distinct(personagem => personagem.nome) // Pega os nomes dos personagens e irá fazer a distinção se eles forem repetidos
)
.subscribe(console.log);
