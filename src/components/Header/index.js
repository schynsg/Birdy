import React from 'react';
import logo from "../../images/birdy.svg"

const Header = () => {
    return (
        <header>
            <h1><a href="/home" title="Accueil"><img src={logo} alt="Birdy"/></a></h1>
        </header>
    )
}


export default Header