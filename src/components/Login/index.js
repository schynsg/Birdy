import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="login_form">
                <form action="#">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input type="text" name="email" id="email" placeholder="Adresse e-mail"/>
                    <label htmlFor="pass">Mot de passe</label>
                    <input type="password" name="pass" id="pass" placeholder="Mot de passe"/>
                    <input type="submit" value="Connexion" className="links"/>
                </form>
                <a href="/signin" title="Créer un compte" className="links secondary">Inscription</a>
            </div>
        </div>
    )
}

export default Login