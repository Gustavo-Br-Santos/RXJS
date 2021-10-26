// throttleTime
// Emite apenas o primeiro valor e ignora todas as outras emissões até que tenha terminado
// o tempo estipulado. 
// Também é possível configurar para emitir o primeiro e o último valor emitido dentro de cada intervalo de tempo acionado.


// debounceTime

import { asyncScheduler, fromEvent } from "rxjs";
import { distinctUntilChanged, pluck, throttleTime } from "rxjs/operators";

// Emite o último valor emitido após a conclusão do tempo estipulado


const click = fromEvent(document, 'click');

click.pipe(
    throttleTime(3000) // Perceba que a cada vez que clica na tela, ele emite o evento e só permite emitir um novo evento
                       // depois de ter passado os 3s.
).subscribe(console.log)

// Exemplo2:

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent(input, 'keyup')

input$.pipe(
    throttleTime(2000, asyncScheduler, {
        leading: true, // emitir primeiro valor
        trailing: true, // emitir último valor
    }), // Configuração para emitir o primeiro e último valor.
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)
