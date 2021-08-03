import React from 'react';
import { connect } from 'react-redux';
import { requestApiCepThunk } from '../redux/actions/index';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cep extends React.Component {
    constructor(){
        super();

        this.state = {
            cep: '',
            loading: true,
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
         this.setState({
           loading: false,
         })
      } else {
       alert('Digite um cep Valido')
      }
    }

    render() {
        const { stateGlobal } = this.props;
        return (
          <div className="div-form">
            <Form>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Digite seu CEP</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Somente Numeros"
                  value={ this.state.cep }
                  onChange={ this.handleChange }
                /> <br/> 
                {' '}<Button variant="primary" onClick={this.handleClick} >BUSCAR</Button>
               </Form.Group>
              {this.state.loading === true ? <> </> :
               <ListGroup>
                 {stateGlobal.map((value) =>
                 <>
                  <ListGroup.Item >{value.message}</ListGroup.Item>
                  <ListGroup.Item>{value.address}</ListGroup.Item>
                  <ListGroup.Item>{value.district}</ListGroup.Item>
                  <ListGroup.Item>{value.state_name}</ListGroup.Item>
                  <ListGroup.Item>{value.city}</ListGroup.Item>
                  <ListGroup.Item>{value.number_formatted}</ListGroup.Item>
                 </>)}
               </ListGroup>
                   }
            </Form>
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
