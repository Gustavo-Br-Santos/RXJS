import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators';

const url2 = 'https://api.github.com/userserro?per_page=5';

// Caso haja um erro, irá imprimir o erro e retornar um objeto vazio, indicando que não houve retorno
const manejaErros2 = (err: AjaxError) => {

    console.warn('Erro :', err);
    return of([])
}

const fetchPromisse2 = fetch( url2 )

ajax(url2).pipe(
    map( resp => resp.response),
    catchError( manejaErros2 )
)
    .subscribe(users => console.log('Usuarios: ', users))