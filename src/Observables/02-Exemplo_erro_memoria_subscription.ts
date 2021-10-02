import { Observable, Observer } from "rxjs";
import { onErrorResumeNext } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Complete')
};

const intervalo$ = new Observable<number>( subscribe => {
    // Criar um contador que incrementa um por segundo
    let count = 0;

    setInterval(() => {
        // Cada segundo
        count ++;
        subscribe.next(count)
        console.log('count: ', count);
        
    }, 1000)
} )

const subs1 = intervalo$.subscribe(numero => {console.log('Num: ', numero)})
const subs2 = intervalo$.subscribe(numero => {console.log('Num: ', numero)})
const subs3 = intervalo$.subscribe(numero => {console.log('Num: ', numero)})

//Unsubscribe após 3segundos
setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('completado!');
    
})

// É possivel perceber que embora tenha desinscrito os subs1, subs2 e subs3, não foi
// desinscrito o subscribe de intervalo$ e o contador ficará rodando indefinidamente.