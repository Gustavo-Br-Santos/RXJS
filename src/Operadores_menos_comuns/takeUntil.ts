// TakeUntil

// Completa o observable até que uma determinada condição seja realizada por outro observable

import { fromEvent, interval } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

// EX: Parar a contagem de um intervalo assim que um botão for clicado.

const button = document.createElement('button');
button.innerHTML = 'Parar contagem'

document.querySelector('body').append(button);

const counter$ = interval(1000).pipe(tap(t => console.log('intervalo: ', t)))
const clickBtn$ = fromEvent( button, 'click')

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completo!')
}) 
