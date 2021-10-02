import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: n => console.log(n),
    error: e => console.error(e),
    complete: () => console.info('Complete')
} 

const obs$ = new Observable<string>( subs => {
    subs.next('Olá')
    subs.next('Mundo!')

    subs.next('Olá')
    subs.next('Mundo!')

    subs.complete()

    subs.next('Olá')
    subs.next('Olá')
    
});

// Escrevendo os atributos dentro do subscribe
obs$.subscribe({
    next: (n) => console.log('next: ', n),
    error: (e) => console.error('error: ', e),
    complete: () => console.info('complete')
});

// Usando o Observer para ter o mesmo efeito
obs$.subscribe(observer)

