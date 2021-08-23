import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <main>
            <div className="landing_page">
                <div className="account_links">
                    <Link to="/login" title="Se connecter" className="links">Connexion</Link>
                    <Link to="/signin" title="Créer un compte" className="links secondary">Inscription</Link>
                    <p>Test test</p>
                </div>
            </div>
        </main>
    )
}


export default Landing