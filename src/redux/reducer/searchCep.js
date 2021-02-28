const INITIAL_STATE = [{
    message: '',
    address: '',
    district: '',
    state_name: '',
    city: '',
    number_formatted: '',
}];

function searchCep(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'INITIAL_CEP':
            return [{
                ...state,
                message: action.payload.message,
                address: action.payload.address,
                district: action.payload.district,
                state_name: action.payload.state_name,
                city: action.payload.city,
                number_formatted: action.payload.number_formatted,
            }];
        default:
          return state;
    }
}

export default searchCep;