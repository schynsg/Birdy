import React from 'react';

const Landing = () => {
    return (
        <main>
            <div className="welkome_page">
                <div className="account_links">
                    <div className="login_form">
                        <form action="#">
                            <label htmlFor="email">Adresse e-mail</label>
                            <input type="text" name="email" id="email" placeholder="Adresse e-mail"/>
                            <label htmlFor="pass">Mot de passe</label>
                            <input type="password" name="pass" id="pass" placeholder="Mot de passe"/>
                            <input type="submit" value="Connexion"/>
                        </form>
                        <a href="#" title="Créer un compte">Inscription</a>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Landing