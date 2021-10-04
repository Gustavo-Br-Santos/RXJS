// Filter

import { from, range, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

// Pegar apenas os ímpares de 1 a 10
range(1, 10).pipe(
    filter(val => val % 2 === 1)
).subscribe(console.log)

interface Personagem {
    tipo: string;
    nome: string
}

const personagens: Personagem[] = [
    {
        tipo: 'heroi',
        nome: 'Batman'
    },
    {
        tipo: 'heroi',
        nome: 'Robin'
    },
    {
        tipo: 'vilao',
        nome: 'Coringa'
    },
]


// Filtrar da lista apenas os herois:
/**
 * Primeiro, podemos usar o from para transformar nossa lista em um observable
 * e conforme cada entrada, fazer a lógica de comparação no filter.
 */
from( personagens ).pipe(
    filter(val => val.tipo === 'heroi')
).subscribe(console.log)

// Implimir na tela apenas a tecla enter quando for pressionada
const keyUp = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
);

keyUp.subscribe(console.log)
