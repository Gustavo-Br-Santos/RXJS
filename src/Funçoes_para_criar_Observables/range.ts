/**range
 * Permite informar um número inícial e irá emitir valores em sequencia
 * Também permite simular um funcionamento asincrono.
 */

 import { asyncScheduler, range } from "rxjs";

 const range$ = range(1, 5) // 1- valor início. É opcional. Por default é 0; 2- será emitido 5 eventos a partir do 1 
 
 console.log('Início teste síncrono');
 range$.subscribe(console.log)
 console.log('Fim teste síncrono');
 
 
 const rangeAssync$ = range(1, 5, asyncScheduler) // 1- valor início. É opcional. Por default é 0; 2- será emitido 5 eventos a partir do 1 
 
 console.log('Início teste assíncrono');
 rangeAssync$.subscribe(console.log)
 console.log('Fim teste assíncrono');
 
 