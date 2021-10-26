const url = 'https://api.github.com/users?per_page=5';

const manejaErros = (response: Response) => {

    if ( !response.ok ) {
        throw new Error( response.statusText);
    }

    return response;
}

const fetchPromisse = fetch( url )

// Por se tratar de uma promessa dento de outra, caso altere a url, ele não irá identificar erro
// fetchPromisse
    // .then( resp => resp.json() )
    // .then( data => console.log('data: ', data))
    // .catch( err => console.warn('erro nos usuarios: ', err))


// Neste caso, se alterar para uma url inexistente, irá funcionar
fetchPromisse
    .then(manejaErros)
    .then( resp => resp.json() )
    .then( data => console.log('data: ', data))
    .catch( err => console.warn('erro nos usuarios: ', err))