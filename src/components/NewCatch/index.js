import React, {useContext, useEffect, useState} from 'react';
import firebase from "firebase";

const NewCatch = (props) => {

    const data = {
        catch_type: 'Au nid',
        date: '',
        address: '',
        is_new_catch: '1',
        ring: ''
    }

    const [newCatchData, setNewCatchData] = useState(data);

    const [error, setError] = useState('');

    const handleChange = e => {
        setNewCatchData({...newCatchData, [e.target.id]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                const user_id = user.uid;
                const {catch_type, date, address, is_new_catch, ring} = newCatchData;
                firebase.firestore().collection('catches').add({
                    catch_type,
                    date,
                    address,
                    is_new_catch,
                    ring,
                    user_id
                }).then(() => {
                    setNewCatchData({...data});
                    props.history.push('/home');
                }).catch(error => {
                    setError(error);
                    setNewCatchData({...data});
                })
            }
        });
    }

    //Gestion des erreurs
    const errorMessage = error !== '' && <span className="errorMessage">{error.message}</span>;

    return (
        <div>
            <h2 className="new-catch_title">Signaler une capture</h2>
            <p className="intro">Veuillez nous fournir les informations relatives à cette capture</p>
            {errorMessage}
            <form onSubmit={handleSubmit}>
                <div className="question">
                    <label htmlFor="catch_type" className="question_title">Comment l'oiseau a-t-il été capturé ?</label>
                    <select id="catch_type" name="catch_type" required onChange={handleChange}>
                        <option value="Au nid" className="answer">Au nid</option>
                        <option value="Avec filet" className="answer">Avec filet</option>
                        <option value="Autre" className="answer">Autre</option>
                    </select>
                </div>
                <div className="question">
                    <label htmlFor="date" className="question_title">Quand a-t-il été capturé ?</label>
                    <input type="date" id="date" name="date" required onChange={handleChange}/>
                </div>
                <div className="question">
                    <label htmlFor="address" className="question_title">Où l'oiseau a-t-il été capturé ?</label>
                    <input type="text" id="address" name="address" placeholder="Adresse de capture" required onChange={handleChange}/>
                </div>
                <div className="question">
                    <label htmlFor="is_new_catch" className="question_title">L'oiseau a-t-il un bague ?</label>
                    <select id="is_new_catch" name="is_new_catch" required onChange={handleChange}>
                        <option value="1" className="answer">Oui</option>
                        <option value="0" className="answer">Non</option>
                    </select>
                </div>
                <div className="question">
                    <label htmlFor="ring" className="question_title">Quel est le (nouveau) numéro de bague ?</label>
                    <input type="text" id="ring" name="ring" placeholder="Numéro de bague" onChange={handleChange}/>
                </div>
                <input type="submit" value="Valider" className="links"/>
            </form>
            <a href="/home" title="Retourner à la page Home" className="links secondary">Annuler</a>
        </div>
    )
}


export default NewCatch