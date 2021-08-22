import React, {Component} from 'react';
import firebase from "firebase";

class ModifyBird extends Component {

    state = {
        ring: '',
        bird_type: '',
        length: '',
        weight: '',
        fat: '',
        sex: '',
        age: '',
        modified: false
    };

    componentDidMount() {
        const ref = firebase.firestore().collection("birds").doc(this.props.match.params.id);
        ref.get().then((doc) => {
            this.setState({
                capture: doc.data()
            });
            const ring = this.state.capture.ring;
            this.setState({ring: ring});
            const bird_type = this.state.capture.bird_type;
            this.setState({bird_type: bird_type});
            const length = this.state.capture.length;
            this.setState({length: length});
            const weight = this.state.capture.weight;
            this.setState({weight: weight});
            const fat = this.state.capture.fat;
            this.setState({fat: fat});
            const sex = this.state.capture.sex;
            this.setState({sex: sex});
            const age = this.state.capture.age;
            this.setState({age: age});
        });
    };

    handleBirdType = e => {
        this.setState({bird_type: e.target.value});
    };

    handleLength = e => {
        this.setState({length: e.target.value});
    };

    handleWeight = e => {
        this.setState({weight: e.target.value});
    };

    handleFat = e => {
        this.setState({fat: e.target.value});
    };

    handleSex = e => {
        this.setState({sex: e.target.value});
    };

    handleAge = e => {
        this.setState({age: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        firebase.firestore().collection('birds').doc(this.props.match.params.id).update({
            ring: this.state.ring,
            bird_type: this.state.bird_type,
            length: this.state.length,
            weight: this.state.weight,
            fat: this.state.fat,
            sex: this.state.sex,
            age : this.state.age
        }).then(() => {
            this.setState({modified: true});
            this.props.history.push('/new-catch-success');
        }).catch(error => {
            console.log(error);
        })
    }


    render(){
        return (
            <div>
                <h2 className="new-catch_title">Cet oiseau est connu</h2>
                <p className="intro">Veuillez modifier les valeures nécessaires.</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="question">
                        <label htmlFor="bird_type" className="question_title">Quel type d'oiseau est-ce ?</label>
                        <select id="bird_type" name="bird_type" required onChange={this.handleBirdType} value={this.state.bird_type}>
                            <option value="" className="answer">Sélectionnez un type d'oiseau</option>
                            <option value="1" className="answer">Accenteur alpin - Prunella collaris</option>
                            <option value="2" className="answer">Aigle botté - Hieraaetus pennatus</option>
                            <option value="3" className="answer">Aigle criard - Clanga clanga</option>
                        </select>
                    </div>
                    <div className="question">
                        <label htmlFor="length" className="question_title">Quelle est sa longueur alaire (en cm) ?</label>
                        <input type="number" id="length" name="length" min="0" step="0.1" placeholder="Longueur alaire en cm" onChange={this.handleLength} defaultValue={this.state.length}/>
                    </div>
                    <div className="question">
                        <label htmlFor="weight" className="question_title">Quel est son poids (en g) ?</label>
                        <input type="number" id="weight" name="weight" min="0" step="1" placeholder="Poids en grammes" onChange={this.handleWeight} defaultValue={this.state.weight}/>
                    </div>
                    <div className="question">
                        <label htmlFor="fat" className="question_title">Quel est son adiposité ?</label>
                        <input type="range" id="fat" name="fat" min="1" max="5" step="1" onChange={this.handleFat} defaultValue={this.state.fat}/>
                    </div>
                    <div className="question">
                        <label htmlFor="sex" className="question_title">Quel est son sexe ?</label>
                        <select id="sex" name="sex" required onChange={this.handleSex} value={this.state.sex}>
                            <option value="Mâle" className="answer">Mâle</option>
                            <option value="Femelle" className="answer">Femelle</option>
                            <option value="Indéterminée" className="answer">Indéterminée</option>
                        </select>
                    </div>
                    <div className="question">
                        <label htmlFor="age" className="question_title">Quel est son âge ?</label>
                        <select id="age" name="age" required onChange={this.handleAge} value={this.state.age}>
                            <option value="Jeune" className="answer">Jeune</option>
                            <option value="Adulte" className="answer">Adulte</option>
                            <option value="Indéterminé" className="answer">Indéterminé</option>
                        </select>
                    </div>
                    <input type="submit" value="Valider" className="links"/>
                </form>
                <a href="/home" title="Retourner à la page Home" className="links secondary">Annuler</a>
            </div>
        )
    }
}


export default ModifyBird