import React from 'react';
import firebase from "firebase";


class BirdsTypesList extends React.Component {
    state = {
        birds_types: null
    }

    componentDidMount() {
        firebase.firestore().collection("birds_types")
            .get()
            .then( snapchot => {
                const birds_types = [];
                snapchot.forEach(doc => {
                    const data = doc.data();
                    birds_types.push(data);
                })
                this.setState({birds_types : birds_types})
            })
            .catch( error => console.log(error))
    }

    render() {

        const displayBirdsTypes = this.state.birds_types && this.state.birds_types.map((type, i) => {

            return (
                <div className="item" key={i}>
                    <p>Nom : {type.nom}</p>
                    <p>Nom latin : {type.nom_latin}</p>
                    <p>Famille: {type.famille}</p>
                    <p>Taille: {type.taille}</p>
                    <p>Envergure: {type.envergure}</p>
                    <p className="text"><span>Identification :</span> {type.identification}</p>
                    <p className="text"><span>Habitat :</span> {type.habitat}</p>
                </div>
            )
        })

        return (
            <div>
                <h2 className="users_title">Encyclopédie</h2>
                <p className="intro">Vous trouverez ici tous les oiseaux</p>
                {displayBirdsTypes}
            </div>
        )
    }
}


export default BirdsTypesList