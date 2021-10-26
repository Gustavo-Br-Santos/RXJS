import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax'

const url = 'https://httpbin.org/delay/1';

const trataErro = (resp: AjaxError) => {
    console.warn('error: ', resp.message)
    return of({
        ok: false,
        usuarios: []
    })
}

const obs1$ = ajax.getJSON(url).pipe(
    catchError( trataErro )
)
const obs2$ = ajax(url).pipe(
    catchError( trataErro )
)

obs1$.subscribe( data => console.log('getJson: ', data))
obs2$.subscribe( data => console.log('ajax: ', data))