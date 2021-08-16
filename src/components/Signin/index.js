import React, { useState, useContext } from 'react'
import { FirebaseContext } from "../Firebase";

const Signin = (props) => {

    const firebase = useContext(FirebaseContext);

    const data = {
        idisn: '',
        name: '',
        address: '',
        city: '',
        email: '',
        pass: '',
        repass: ''
    }

    const [loginData, setLoginData] = useState(data);

    const [error, setError] = useState('');

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        const {idisn, name, address, city, email, pass, repass} = loginData;
        firebase.signupUser(email, pass)
            .then(authUser => {
                return firebase.user(authUser.user.uid).set({
                    idisn,
                    name,
                    address,
                    city,
                    email
                })
            })
            .then(() => {
                setLoginData({...data});
                props.history.push('/home');
            })
            .catch(error => {
                setError(error);
                setLoginData({...data});
            })
    }

    const {idisn, name, address, city, email, pass, repass} = loginData;

    const submit = idisn !== '' && name !== '' && address !== '' && city !== '' && email !== '' && pass === repass
    ? <input type="submit" value="Inscription" className="links"/> : <input type="submit" value="Inscription" className="links" disabled/>

    //Gestion des erreurs
    const errorMessage = error !== '' && <span className="errorMessage">{error.message}</span>;

    return (
        <div>
            <div className="signin_form">
                {errorMessage}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="idisn">ID Institut des Sciences Naturelles</label>
                    <input onChange={handleChange} value={idisn} type="text" name="idisn" id="idisn" placeholder="ID Institut des Sciences Naturelles" required/>
                    <label htmlFor="name">Nom et prénom</label>
                    <input onChange={handleChange} value={name} type="text" name="name" id="name" placeholder="Nom et prénom" required/>
                    <label htmlFor="address">Adresse</label>
                    <input onChange={handleChange} value={address} type="text" name="address" id="address" placeholder="Adresse" required/>
                    <label htmlFor="city">Ville</label>
                    <input onChange={handleChange} value={city} type="text" name="city" id="city" placeholder="Ville" required/>
                    <label htmlFor="email">Adresse e-mail</label>
                    <input onChange={handleChange} value={email} type="email" name="email" id="email" placeholder="Adresse e-mail" required/>
                    <label htmlFor="pass">Mot de passe</label>
                    <input onChange={handleChange} value={pass} type="password" name="pass" id="pass" placeholder="Mot de passe" required/>
                    <label htmlFor="repass">Confirmez votre mot de passe</label>
                    <input onChange={handleChange} value={repass} type="password" name="repass" id="repass" placeholder="Confirmez votre mot de passe" required/>
                    {submit}
                </form>
                <a href="/login" title="Se connecter" className="links secondary">Connexion</a>
            </div>
        </div>
    )
}

export default Signin