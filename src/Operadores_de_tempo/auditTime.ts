import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

// Com o sample é possível pegar uma amostra do último evento do primeiro observable

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap: ', val)),
    auditTime(2000)
).subscribe(console.log)