/* RUTA PRINCIPAL, UBICAR EN JOURNALAPP.JS */
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import { firebase } from '../firebase/firebase-config';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

import { useDispatch } from "react-redux";
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            //console.log(user);
            //Si user existe "?"
            if ( user?.uid ) {
                dispatch(login( user.uid, user.displayName ));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }



    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated= { isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated= { isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />
                    {/* Cualquier otra cosa */}
                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
