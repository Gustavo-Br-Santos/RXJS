// distinctUntilKeyChanged

// Não emite quando a propriedade de um valor anterior for o mesmo, 
//porém só faz uma comparação da propriedade do valor atual com a propriedade do valor anterior.


import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
    distinctUntilKeyChanged('nome') // Pega a propriedade do objeto
)
.subscribe(console.log);
