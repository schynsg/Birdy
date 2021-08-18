import React, { useContext } from 'react'
import { FirebaseContext } from "../Firebase";
import logout from "../../images/logout.svg";

const Logout = (props) => {

    const firebase = useContext(FirebaseContext);

    const handleLogout = () => {
        firebase.logoutUser();
        //props.history.push('/');
    }
    
    return (
        <div className="logout">
            <a onClick={handleLogout} href="#" title="Se déconnecter">
                <img src={logout} alt="Déconnexion"/>
            </a>
        </div>
    )
}


export default Logout