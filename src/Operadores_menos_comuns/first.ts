// First
// Completa o observable apenas com o primeiro valor
// Caso seja colocado uma condição, irá emitir o observable até a primeira emissão que cumpra essa condição.

import { fromEvent } from "rxjs";
import { first, map, tap } from "rxjs/operators";


// EX1: Emitir os dados do primeiro clique do mouse.
const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    tap( () => console.log('tap-click')),
    first<MouseEvent>()
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})

// EX2: Emitir os dados do apenas quando o usuário clicar no eixo y acima de 150 px
const click150$ = fromEvent<MouseEvent>(document, 'click')

click150$.pipe(
    tap<MouseEvent>( t => console.log('tap-click150: ', t)),
    map( event => ({ // Pegando apenas as propriedades a serem usadas
        clientX: event.clientX,
        clientY: event.clientY
    }) ),
    first( event => event.clientY >= 150 ) // Irá concluir o observable na primeira emissão que atender a condição especificada.
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})