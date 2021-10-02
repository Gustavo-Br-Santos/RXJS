/**asyncSchedule
 * Com ele podemos trabalhar de forma similar ao setTimeOut() e setInterval()
 */

 import { asyncScheduler } from "rxjs"

 // Ex. setTimeout
 
 const saudar = () => console.log('Olá Mundo!')
 const saudar2 = nome => console.log(`Olá ${nome}`)
 
 asyncScheduler.schedule(saudar, 2000) // Pode receber uma função sem parametros de entrada e o tempo para executar
 asyncScheduler.schedule(saudar2, 2000, 'Fulano') // Pode receber uma função com apenas um parametro de entrada, o tempo para executar e o parametro
 
 // Ex. setInterval()
 
 const subs = asyncScheduler.schedule( function(state){
 
     console.log('state: ', state);
 
     this.schedule(state + 1, 1000);
 
 }, 3000, 0);
 
 setTimeout(() => {
     subs.unsubscribe()
 }, 10000)