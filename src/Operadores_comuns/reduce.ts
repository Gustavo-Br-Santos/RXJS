// Emite o total das somas do valor acumulado + valor atual apenas quando o observable se completa

import { interval } from "rxjs";
import { reduce, take } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorAtual: number) => {
    return acumulador + valorAtual;
}

const total = numbers.reduce(totalReducer, 0)
console.log('total array: ', total)

interval(1000).pipe(
    take(5),
    reduce(totalReducer, 0)
).subscribe({
    next: (next) => console.log('next: ', next),
    complete: () => console.log('completado')
})