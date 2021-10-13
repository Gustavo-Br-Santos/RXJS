// Scan: Retorna os valor atual mais o acumulado a cada emissão do observable

import { from } from "rxjs";
import { map, scan, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalAcumulador = (acumulador: number, valorAtual: number) => {
    return acumulador + valorAtual;
}

from( numbers ).pipe(
    tap(console.log),
    scan(totalAcumulador, 0)
).subscribe({
    next: (next) => console.log('next: ', next),
    complete: () => console.log('completado')
})


// Ex. Redux

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    idade?: number
}

const usuarios: Usuario[] = [
    {id:'1', autenticado: true, token:'965465165416', idade:25},
    {id:'2', autenticado: false, token:null, idade:29},
    {id:'3', autenticado: true, token:'51616516516516', idade:40},
    {id:'4', autenticado: false, token:null, idade:19}
]

const state$ = from(usuarios).pipe(
    scan<Usuario>((acc, cur) => {
        return {...acc, ...cur}
    })
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log)

