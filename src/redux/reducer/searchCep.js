const INITIAL_STATE = [{
    code: '',
    state: '',
    city: '',
    district: '',
    address: '',
}];

function searchCep(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'INITIAL_CEP':
            return [{
                ...state,
                message: action.payload.code,
                address: action.payload.state,
                district: action.payload.city,
                state_name: action.payload.district,
                city: action.payload.address,
            }];
        default:
          return state;
    }
}

export default searchCep;