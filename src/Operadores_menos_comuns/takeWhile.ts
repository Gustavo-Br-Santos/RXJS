// TakeWhile

import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

// Escutar os clicks enquanto o uxuário clicar no eixo y abaixo de 150

const click$ = fromEvent<MouseEvent>( document, 'click')

click$.pipe(
    map( ({x, y}) => ({ x, y}) ),
    // takeWhile( ({ y }) => y <= 150 ), // Dessa forma, irá completar, mas não irá enviar o último evento do click. 
                                      //Caso precise do evento, deve-se setar o inclusive como true, como no exemplo abaixo: 
    takeWhile( ({ y }) => y <= 150, true )
    )
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})