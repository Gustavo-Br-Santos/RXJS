/**
 * fromEvent
 * Permite criar observables para eventos específicos, como clique de mouse,
 * tecla de teclado, scroll do mouse, entre outros.
 */

 import { fromEvent } from "rxjs";

 const event1 = fromEvent<MouseEvent>(document, 'click')
 const event2 = fromEvent<KeyboardEvent>(document, 'keyup')
 
 const observer = {
     next: val => console.log('val: ', val)
 }
 
 // Exemplo de pegar as coordenadas do clique na tela
 event1.subscribe(evento => {
     console.log(evento);
     console.log('Eixo x: ', evento.x)
     console.log('Eixo y: ', evento.y)
 })
 
 // Exemplo de verificar a tecla clicada
 event2.subscribe(evento => {
     console.log(evento);
     console.log('Tecla pressionada: ', evento.key)
 })