import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();
    //const state = useSelector( state => state );
    const { msgError } = useSelector( state => state.ui );
    console.log(msgError);

    const [ formValue, handleInputChange ] = useForm({
        name: 'Alfredo',
        email: 'dominiolibre2@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } =  formValue;

    const handleRegister = (e) => {
        e.preventDefault();
        //console.log(name, email, password, password2);
        if ( isFormValid() ) {
            console.log('Formulario correcto');
            dispatch(startRegisterWithEmailPassword(email, password, name));
        }
    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            //console.log('Nombre es requerido');
            dispatch(setError('Nombre es requerido'));
            return false;
        } else if ( !validator.isEmail(email) ) {
            //console.log('Email is not valid');
            dispatch(setError('Email is not valid'));
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            //console.log('Password should be at least 6 characters and match each other');
            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    


    return (
        <>
            <h3 className="auth__title">Register</h3>  

            <form onSubmit={handleRegister }>
                {
                    msgError && //Si no es null muestra el error
                    (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                    
                }
                
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button 
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <hr />

                {/* Permite navegar entre paginas */}
                <Link 
                    to="/auht/login"
                    className="link"
                >
                    Already registered?  
                </Link>
                
            </form>
        </>
    )
}
