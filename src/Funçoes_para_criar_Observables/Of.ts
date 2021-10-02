import { of } from "rxjs";

/**
 * of
 * A função of permite criar observables de maneira síncrona.
 * Com ele, é possível passar uma sequencia de dados de qualquer tipo
 * que ele vai retornar como um observable
 */

// const obs$ = of(1, 2, 3, 4, 5, 6)
const obs$ = of([1, 2], {a: '1', b: '2'}, function(){}, Promise.resolve(true))

console.log('Início do Observable')
obs$.subscribe({
    next: (next) => console.log('next: ', next),
    error: (error) => console.log('error: ', error),
    complete: () => console.log('Sequencia completa!')
})
console.log('Fim da sequencia'); // Se fosse assícrono, esse log iria aparecer antes da saida do observable.
