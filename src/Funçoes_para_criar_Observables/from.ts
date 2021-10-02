/**
 * of- pega argumentos e gera uma sequencia
 * from - cria um observable com base em um array, promise, outro observable
 */

 import { from, of } from "rxjs"

 const observer = {
     next: val => console.log('next: ', val),
     complete: () => console.log('Completo!')
 }
 
 const listaFrom$ = from([1, 2, 3, 4, 5]);
 const listaOf$ = of([1, 2, 3, 4, 5]);
 
 console.log('lista com from: ');
 listaFrom$.subscribe( observer );
 // Notamos que iterou em cada elemento da lista e entregou na saída cada elemento como um next
 
 console.log('------------------------------------ ');
 console.log('lista com of: ');
 listaOf$.subscribe( observer )
 // Notamos que apenas retornou a lista inteira como um next na saída.
 
 //-------------------------------------------------------------------------------------------
 //Usando from com promise:
 
 const promiseFrom$ = from( fetch('https://api.github.com/users/klerith') );
 
 promiseFrom$.subscribe( async(resp) => {
 
     console.log(resp);
 
     const dataResp = await resp.json()
     console.log(dataResp);
     
 })
 
 
 //--------------------------------------------------------------------------------------------------
 // Usando o from para trabalhar com funções
 
 const meuGerador = function*(){
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
 }
 
 const meuIteravel1 = meuGerador()
 const meuIteravel2 = meuGerador()
 
 // podemos iterar usando um loop normal, mas caso precisemos tornar o iteravel
 // em um observable para realizar operaçãos rxjs com ele, podemos usar o from.
 
 
 // loop for:
 console.log('loop for');
 
 for(let id of meuIteravel1) {
     console.log(id);
 }
 
 // Usando o from:
 console.log('from: ');
 
 from(meuIteravel2).subscribe(observer);