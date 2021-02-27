import React from 'react';
import { connect } from 'react-redux';
import { requestApiCepThunk } from '../redux/actions/index';

class Cep extends React.Component {
    constructor(){
        super();

        this.state = {
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

    handleClick() {
      const { cep } = this.props;
      const validateCep = /^[0-9]{5}[0-9]{3}$/;

      if(validateCep.test(this.state.cep)){
         cep(this.state.cep);
      } else {
        alert('Digite um  CEP valido!')
      }
    }

    render() {
        const { stateGlobal } = this.props;
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
              <h3>
                 {stateGlobal.map((value, index) => 
                 <div key={index}>
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

const  mapDispatchToProps = (dispatch) => ({
    cep: (value) => dispatch(requestApiCepThunk(value)),
})

const mapStateToProps = (state) => ({
    stateGlobal: state.searchCep,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cep);
