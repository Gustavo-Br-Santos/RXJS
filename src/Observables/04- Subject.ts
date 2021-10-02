import { Observable, Observer, Subject } from "rxjs";
import { onErrorResumeNext } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Complete')
};

const intervalo$ = new Observable<number>( subscribe => {
    let count = 0;

    const interval = setInterval(
        () => { subscribe.next(Math.random()) }, 1000
    );

    return () => {
        clearInterval(interval);  
        console.log('intervalo destruido')      
    }
})

// const subs1 = intervalo$.subscribe(rnd => (console.log('rnd1: ', rnd)))
// const subs2 = intervalo$.subscribe(rnd => (console.log('rnd2: ', rnd)))

/**
 * Subject:
 * 1- Pode fazer multiplas inscrições;
 * 2- Também é um observer
 * 3- É possivel usar next, error e complete
 */

const subject$ = new Subject()
const subsSubject = intervalo$.subscribe( subject$ )

// Notamos que nesse caso, embora seja duas inscrições,  os valores são os mesmos.
const subj1 = subject$.subscribe(observer)
const subj2 = subject$.subscribe(observer)

// Como o subject também é um observer, é possível adicionar algo no fluxo e parar o fluxo.

// Ex. Após 5,5seg, inserir o valor 10 e completar o fluxo  
setTimeout(() => {

    subject$.next(10);

    subject$.complete()  // Embora não vai mais aparecer no console, aqui nós apenas completamos a
                         // subject, mas o intervalo$ vai continuar rodando e consumindo memória.

    subsSubject.unsubscribe() // devemos desinscrever a inscrição do intervalo também.

}, 5500)