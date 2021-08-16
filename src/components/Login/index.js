import React, { useState, useContext } from 'react'
import { FirebaseContext } from "../Firebase";

const Login = (props) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [error, setError] = useState('');

    const submit = email !== '' && pass !== ''
        ? <input type="submit" value="Connexion" className="links"/> : <input type="submit" value="Connexion" className="links" disabled/>

    const handleSubmit = e => {
        e.preventDefault();
        firebase.loginUser(email, pass)
            .then(user => {
                props.history.push('/home');
            })
            .catch(error => {
                setError(error);
            })
    }

    //Gestion des erreurs
    const errorMessage = error !== '' && <span className="errorMessage">{error.message}</span>;

    return (
        <div>
            <div className="login_form">
                {errorMessage}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Adresse e-mail</label>
                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder="Adresse e-mail" required/>
                    <label htmlFor="pass">Mot de passe</label>
                    <input onChange={e => setPass(e.target.value)} value={pass} type="password" name="pass" id="pass" placeholder="Mot de passe" required/>
                    {submit}
                </form>
                <a href="/signin" title="Créer un compte" className="links secondary">Inscription</a>
            </div>
        </div>
    )
}

export default Login