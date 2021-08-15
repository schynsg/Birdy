import React from 'react'

const Signin = () => {
    return (
        <div>
            <div className="signin_form">
                <form action="#">
                    <label htmlFor="idisn">ID Institut des Sciences Naturelles</label>
                    <input type="text" name="idisn" id="idisn" placeholder="ID Institut des Sciences Naturelles"/>
                    <label htmlFor="username">Identifiant</label>
                    <input type="text" name="username" id="username" placeholder="Identifiant"/>
                    <label htmlFor="name">Nom et prénom</label>
                    <input type="text" name="name" id="name" placeholder="Nom et prénom"/>
                    <label htmlFor="address">Adresse</label>
                    <input type="text" name="address" id="address" placeholder="Adresse"/>
                    <label htmlFor="city">Ville</label>
                    <input type="text" name="city" id="city" placeholder="Ville"/>
                    <label htmlFor="email">Adresse e-mail</label>
                    <input type="text" name="email" id="email" placeholder="Adresse e-mail"/>
                    <label htmlFor="pass">Mot de passe</label>
                    <input type="password" name="pass" id="pass" placeholder="Mot de passe"/>
                    <label htmlFor="repass">Confirmez votre mot de passe</label>
                    <input type="password" name="repass" id="repass" placeholder="Confirmez votre mot de passe"/>
                    <input type="submit" value="Inscription" className="links"/>
                </form>
                <a href="/login" title="Se connecter" className="links secondary">Connexion</a>
            </div>
        </div>
    )
}

export default Signin