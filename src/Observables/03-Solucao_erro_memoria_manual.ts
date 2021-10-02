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

    const interval = setInterval(() => {
        // Cada segundo
        count ++;
        subscribe.next(count)
        console.log('count: ', count);
        
    }, 1000);

    // Limpar o intervalo a cada execução
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruído');
        
    }
})

const subs1 = intervalo$.subscribe(numero => {console.log('Num: ', numero)})
const subs2 = intervalo$.subscribe(numero => {console.log('Num: ', numero)})
const subs3 = intervalo$.subscribe(numero => {console.log('Num: ', numero)})

//Unsubscribe após 3segundos
setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('completado!');
    
}, 3000)
