import { types } from '../types/types';


const initialState = {
    loading: false,
    msgError: ''
}

export const uiReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case types.uiSetError:
            return {
                ...state, //mantengo el state
                msgError: action.payload //cambio el mensaje de error
            }

        case types.uiRemoveError:
            return {
                ...state, //mantengo el state
                msgError: null //cambio el mensaje de error
            }
        
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
    
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }

}