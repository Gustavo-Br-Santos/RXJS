/**Interval
 * Cria um observable que irá emitir valor indefinidamente conforme o tempo determinado
 * É assíncrono por padrão
 * 
 * timer
 * Cria um observable que após passar o tempo determinado, emite o valor e completa o observable.
 * Além disso, pode agir como o interval e receber outras cofigurações.
 */

 import { interval, Observer, timer } from "rxjs";

 const observer= {
    next: n => console.log('next: ', n),
    complete: () => console.info('Complete')
} 

const interval$ = interval(1000)

console.log('inicio')
// interval$.subscribe( observer )
console.log('fim')

//--------------------------------------------------

const timer$ = timer(3000) // Uso default que irá emitir 0 após o tempo especificado
const timer2$ = timer(3000, 1000) // Parecido com interval, onde irá iniciar em 3s e emitir a cada 1s

console.log('Início timer:')
timer$.subscribe( observer )
console.log('Fim timer:')

// O timer pode ser muito útil para agendar tarefas
// ex: Emitir um evento em 8 segundos:

const hoje = new Date()
hoje.setSeconds(hoje.getSeconds() + 8) // Adiciona 5 segundos a tarefa de hoje

const timer3$ = timer(hoje)

timer3$.subscribe( observer )

