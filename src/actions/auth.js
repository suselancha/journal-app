import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

//Accion asincrona: Llama a login
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ({ user }) => { 
            dispatch(login( user.uid, user.displayName ));
            dispatch(finishLoading());
        })
        .catch( e => {
            console.log(e);
            dispatch(finishLoading());
        })
        
    }
}

export const startRegisterWithEmailPassword = ( email, password, name ) => {

    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({ user }) => { //Extraigo el user de userCred
                await user.updateProfile({ displayName:name });
                console.log(user);
                
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( e => {
                console.log(e);
            })
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

