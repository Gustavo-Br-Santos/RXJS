// Tap
// O operador tap pode ser muito útil para fazer alteração, já que ele nos permite vizualizar 
// o flixo de dados dentro do pipe sem altera-lo.

import { range } from 'rxjs'
import { map, tap } from 'rxjs/operators'

const numeros$ = range(1, 10)

numeros$.pipe(
    tap( numero => console.log('antes: ', numero)),
    map(numero => numero * 10),
    tap({
        next: next => console.log('depois do map: ', next),
        complete: () => console.log('completado')
    })
).subscribe(numero => console.log('subscription: ', numero))