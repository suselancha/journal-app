
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk';
//Añadir nuevos reducers

//Me permite usar Middlewares y reduv dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers ({
    auth: authReducer
});

export const store = createStore(
    reducers,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    //Configurar para trabajar acciones asincronas en la aplicacion.
    composeEnhancers (
        applyMiddleware( thunk )
    )
);