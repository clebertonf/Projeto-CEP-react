import requestCep from '../../services/cepAPI';

export const INITIAL_CEP = 'INITIAL_CEP';

export const initialCepValue = (payload) => ({
    type: INITIAL_CEP,
    payload,
});

export const requestApiCepThunk = (value) => (dispatch) => {
    requestCep(value).then((resp) => dispatch(initialCepValue(resp)));
}
