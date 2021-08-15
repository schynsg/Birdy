import React from 'react';
import logo from "../../images/birdy.svg"

const Welcomeheader = () => {
    return (
        <header className="welcome_header">
            <h1><a href="/home" title="Accueil"><img src={logo} alt="Birdy"/></a></h1>
        </header>
    )
}


export default Welcomeheader