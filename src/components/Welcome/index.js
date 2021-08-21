import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from "../Firebase";

const Welcome = props => {

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);

    useEffect(() => {

        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        })

        return () => {
            listener()
        };
    }, []);
    

    return userSession === null ? (
        <div className="loading_div">Chargement ...</div>
    ) : (
        <div>
            <div className="menu">
                <a href="/new-catch" className="links" title="Ajouter une capture">Signaler une capture</a>
                <a href="/encyclopedia" className="links" title="Parcourir l'encyclopédie">Encyclopédie</a>
                <a href="/users" className="links" title="Rechercher un utilisateur">Liste des utilisateurs</a>
            </div>
        </div>
    )
}

export default Welcome