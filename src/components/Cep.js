import React from 'react';
import requestCep from '../services/cepAPI';

class Cep extends React.Component {
    constructor(){
        super();

        this.state = {
            requestApi: [],
            cep: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange({ target }){
            this.setState({
                cep: target.value,
            });
    }

   async handleClick() {
    const validarCep = /^[0-9]{5}[0-9]{3}$/;
    if(validarCep.test(this.state.cep)){
        const api =  await requestCep(this.state.cep);
        this.setState({
            requestApi: [api],
            cep: '',
        })
    }else {
        alert('Digite cep valido!')
    }
    }

    render() {
        return (
            <div>
              <h3>Digite seu CEP</h3>
              <label>
                  <input
                    type="text"
                    placeholder="Somente Numeros"
                    value={ this.state.cep }
                    onChange={ this.handleChange }
                  />
                 <button onClick={ this.handleClick }>
                    BUSCAR
                </button>
              </label>
              <h3>{this.state.requestApi
                .map((value, index) => <div key={index}>
                 {value.message} <br/>
                 {value.address} <br/>
                 {value.district} <br/>
                 {value.state_name} <br/>
                 {value.city} <br />
                 {value.number_formatted}
                 </div> )}
              </h3>
            </div>
        )
    }
}

export default Cep;
