

function requestCep (numberCep) {
   
    if(numberCep){
        return new Promise((resolve, _reject) => {
            const url = `https://ws.apicep.com/cep.json?code=${numberCep}`;
            fetch(url).then((r) => r.json().then((r) => resolve(r)));
        });
    } else {
        throw new Error('Endpoint invalido');
    }
    
}

export default requestCep;