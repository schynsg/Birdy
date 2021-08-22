import React, {useState} from 'react';
import firebase from "firebase";

const NewBird = (props) => {

    const query = new URLSearchParams(props.location.search);
    const ring = query.get('ring');

    const data = {
        ring: ring,
        bird_type: '',
        length: '',
        weight: '',
        fat: '5',
        sex: 'Mâle',
        age: 'Jeune'
    }

    const [newBirdData, setNewBirdData] = useState(data);

    const [error, setError] = useState('');

    const handleChange = e => {
        setNewBirdData({...newBirdData, [e.target.id]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        const {ring, bird_type, length, weight, fat, sex, age} = newBirdData;
        firebase.firestore().collection('birds').add({
            ring,
            bird_type,
            length,
            weight,
            fat,
            sex,
            age
        }).then(() => {
            setNewBirdData({...data});
            props.history.push('/new-catch-success');
        }).catch(error => {
            setError(error);
            setNewBirdData({...data});
        })
    }

    //Gestion des erreurs
    const errorMessage = error !== '' && <span className="errorMessage">{error.message}</span>;

    return (
        <div>
            <div>
                <h2 className="new-catch_title">Nouvel oiseau</h2>
                <p className="intro">Cette bague n'a pas encore été répertoriée, vuillez compléter ces informations.</p>
                {errorMessage}
                <form onSubmit={handleSubmit}>
                    <div className="question">
                        <label htmlFor="bird_type" className="question_title">Quel type d'oiseau est-ce ?</label>
                        <select id="bird_type" name="bird_type" required onChange={handleChange}>
                            <option value="" className="answer">Sélectionnez un type d'oiseau</option>
                            <option value="1" className="answer">Accenteur alpin - Prunella collaris</option>
                            <option value="2" className="answer">Aigle botté - Hieraaetus pennatus</option>
                            <option value="3" className="answer">Aigle criard - Clanga clanga</option>
                        </select>
                    </div>
                    <div className="question">
                        <label htmlFor="length" className="question_title">Quelle est sa longueur alaire (en cm) ?</label>
                        <input type="number" id="length" name="length" min="0" step="0.1" placeholder="Longueur alaire en cm" onChange={handleChange}/>
                    </div>
                    <div className="question">
                        <label htmlFor="weight" className="question_title">Quel est son poids (en g) ?</label>
                        <input type="number" id="weight" name="weight" min="0" step="1" placeholder="Poids en grammes" onChange={handleChange}/>
                    </div>
                    <div className="question">
                        <label htmlFor="fat" className="question_title">Quel est son adiposité ?</label>
                        <input type="range" id="fat" name="fat" min="1" max="5" step="1" onChange={handleChange}/>
                    </div>
                    <div className="question">
                        <label htmlFor="sex" className="question_title">Quel est son sexe ?</label>
                        <select id="sex" name="sex" required onChange={handleChange}>
                            <option value="Mâle" className="answer">Mâle</option>
                            <option value="Femelle" className="answer">Femelle</option>
                            <option value="Indéterminée" className="answer">Indéterminée</option>
                        </select>
                    </div>
                    <div className="question">
                        <label htmlFor="age" className="question_title">Quel est son âge ?</label>
                        <select id="age" name="age" required onChange={handleChange}>
                            <option value="Jeune" className="answer">Jeune</option>
                            <option value="Adulte" className="answer">Adulte</option>
                            <option value="Indéterminé" className="answer">Indéterminé</option>
                        </select>
                    </div>
                    <input type="submit" value="Valider" className="links"/>
                </form>
                <a href="/home" title="Retourner à la page Home" className="links secondary">Annuler</a>
            </div>
        </div>
    )
}


export default NewBird