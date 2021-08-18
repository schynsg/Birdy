import React from 'react';
import Logout from "../Logout";
import {useHistory} from "react-router-dom";

const NewCatch = () => {

    const history = useHistory();

    return (
        <div>
            <Logout/>
            <h2>Signaler une capture</h2>
            <p className="progression">Progression: 10%</p>
            <div className="question">
                <h2>Comment l'oiseau a-t-il été capturé ?</h2>
                <p className="answer">Au nid</p>
                <p className="answer">Avec filet</p>
                <p className="answer">Autre</p>
                <btn className="links" title="Question suivante">Suivant</btn>
            </div>
            <a onClick={() => history.goBack()} className="links secondary" title="Retour à la page précédente">Retour</a>
        </div>
    )
}


export default NewCatch