// Skip

// Pula as primeiras emissões de um observable

import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

// EX: Parar a contagem de um intervalo assim que um botão for clicado pela segunda vez.

const button = document.createElement('button');
button.innerHTML = 'Parar contagem'

document.querySelector('body').append(button);

const counter$ = interval(1000).pipe(tap(t => console.log('intervalo: ', t)))
const clickBtn$ = fromEvent( button, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1), // Irá ignorar a primeira emissão
    tap(() => console.log('tap depois de skip')),
)

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completo!')
}) 
