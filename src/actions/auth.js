import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

//Accion asincrona: Llama a login
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        setTimeout(() => {
            dispatch( login('1234','Pedro') );
        }, 3500);
    }
}

export const startGoogleLogin = () => {

    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            //.then( userCred => { //Extraigo el user de userCred
            .then( ({ user }) => { //Extraigo el user de userCred
                //console.log(userCred);
                dispatch(
                    login( user.uid, user.displayName )
                )
            });
    }

}


//Return
export const login = (uid, displayName) => ({
    
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })

