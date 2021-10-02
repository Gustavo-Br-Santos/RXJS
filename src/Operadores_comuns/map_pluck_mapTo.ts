import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck, tap } from "rxjs/operators";

// Suponha que precisemos multiplicar todos os números da entrada por 10 e receber a saída como string
range(1, 5).pipe(
    map<number, string>(number => (number * 10).toString())
).subscribe( console.log );


// Ex2. Usar o map para trazer apenas o código da saída do observable de keyup
const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup');

keyUp$.pipe(
    tap(() => console.log('pegando propriedade com map:')),
    map(event => event.code)
).subscribe(code => console.log(code))

// ------------------------------------------------------------------------------------------------------------

/**
 * pluck
 * Caso só queira extrair o valor de uma propriedade, podemos usar o pluck.
 * O operador pluck permite extrair o valor de uma propriedade por vez da saída do observable.
 * Em vez de fazer toda a transformação com o map, podemos apenas indicar a(s) propriedade(s) desejada(s).
 */

const keyUpPluck$ = fromEvent<KeyboardEvent>( document, 'keyup');

// keyUpPluck$.subscribe(console.log);

keyUpPluck$.pipe(
    tap(() => console.log('pegando propriedade com pluck:')),
    pluck('code')
).subscribe(code => console.log(code))
// É  possível notar que a saída é a mesma do map, com o código mais enxuto.


// Usando pluck para pegar propriedades aninhadas:
keyUpPluck$.pipe(
    tap(() => console.log('pegando propriedade aninhada com pluck:')),
    pluck('target', 'baseURI')
).subscribe(code => console.log(code))

/**
 * mapTo
 * O operador mapTo retorna a mesma saída conforme específicada.
 */

// Ex: Ter como saída a mensagem "tecla pressionada" toda vez que uma tecla do teclado for pressionada

const keyUpMapTo$ = fromEvent<KeyboardEvent>( document, 'keyup');

keyUpMapTo$.pipe(
    tap(() => console.log('mapTo: ')),
    mapTo('Tecla pressionada!')
).subscribe(code => console.log(code))