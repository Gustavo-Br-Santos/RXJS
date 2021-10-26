import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax'

const url = 'https://httpbin.org/delay/1';

/**
 * get(url: string, headers?: Record<string, string>): Observable<AjaxResponse<unknown>>
 */
ajax.get(url, {
    'api-key': '123456'
})

/**
 * (method) AjaxCreationMethod.post<unknown>(url: string, body?: any, headers?: Record<string, string>): Observable<AjaxResponse<unknown>>
 */
ajax.post(url,{
    id: 1,
    nome: 'Fulano'
}, {
    'token': '123456'
}).subscribe(console.log)

/**
 * (method) AjaxCreationMethod.put<unknown>(url: string, body?: any, headers?: Record<string, string>): Observable<AjaxResponse<unknown>>
 */
ajax.put(url,{
    id: 1,
    nome: 'Fulano'
}, {
    'token': '123456'
}).subscribe(console.log)


// Método alternativo de realizar petições ajax

ajax({
    url: url,
    method: 'POST',
    headers: {
        'meu-token': '123456789'
    },
    body: {
        id: 1,
        nome: 'Fulano'
    }
}).subscribe(console.log)
