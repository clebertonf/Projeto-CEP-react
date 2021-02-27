

function requestCep (numberCep) {
   
    const token = 'e477bf8b0866a7d61483cca12b580baf';
    if(token){
        return new Promise((resolve, reject) => {
            const url = `http://geradorapp.com/api/v1/cep/search/${numberCep}?token=${token}`;
            fetch(url).then((r) => r.json().then((r) => resolve(r.data)));
        });
    } else {
        throw new Error('Endpoint invalido');
    }
    
}

export default requestCep;