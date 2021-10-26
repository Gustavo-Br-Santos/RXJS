import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

// Com o sample é possível pegar uma amostra do último evento do primeiro observable

const interval$ = interval(500)
const click$ = fromEvent<MouseEvent>(document, 'click')

interval$.pipe(
    sample(click$)
).subscribe(console.log)