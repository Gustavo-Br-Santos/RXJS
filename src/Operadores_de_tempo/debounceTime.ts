// debounceTime

import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

// Emite o último valor emitido após a conclusão do tempo estipulado


const click = fromEvent(document, 'click');

click.pipe(
    debounceTime(3000) // Perceba que a cada vez que clica na tela, inicia a contagem dos 3s novamente e não emite o evento
                       // O evento só será emitido após concluir o tempo estipulado e irá emitir apenas o último.
).subscribe(console.log)

// Exemplo2:

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent(input, 'keyup')

input$.pipe(
    debounceTime(700), // Comente essa linha para ver a diferença de emissões
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)
