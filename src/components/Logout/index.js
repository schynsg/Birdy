import React, { useContext } from 'react'
import { FirebaseContext } from "../Firebase";

const Logout = (props) => {

    const firebase = useContext(FirebaseContext);

    const handleLogout = () => {
        firebase.logoutUser();
        //props.history.push('/');
    }
    
    return (
        <div>
            <a onClick={handleLogout} href="#" title="Se déconnecter">Déconnexion</a>
        </div>
    )
}


export default Logout