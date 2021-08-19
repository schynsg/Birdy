import React, { Component } from 'react';
import {Questions} from "../Questions";
import Logout from "../Logout";

class NewCatch extends Component {

    state = {
        levelNames: ["neutre"],
        currentLevel: 0,
        storedQuestions: [],
        question: null,
        type: null,
        options: [],
        idQuestion: 0
    }

    loadQuestions = level => {
        const fetchedArrayQuestions = Questions[0].quizz[level];

        this.setState({
            storedQuestions: fetchedArrayQuestions
        })
    }

    componentDidMount() {
        this.loadQuestions(this.state.levelNames[this.state.currentLevel]);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.storedQuestions !== prevState.storedQuestions) {
            this.setState({
                question: this.state.storedQuestions[this.state.idQuestion].question,
                type: this.state.storedQuestions[this.state.idQuestion].type,
                options: this.state.storedQuestions[this.state.idQuestion].options
            })
        }
    }

    render() {

        const displayOptions = this.state.options.map((option, index)=>{
            return (
                <p key={index} className="answer">{option}</p>
            )
        })

        return (
            <div>
                <Logout/>
                <h2 className="new-catch_title">Signaler une capture</h2>
                <p className="progression">Progression: 10%</p>
                <div className="question">
                    <h2 className="question_title">{this.state.question}</h2>
                    {displayOptions}
                    <button className="links" title="Question suivante">Suivant</button>
                </div>
            </div>
        )
    }
}


export default NewCatch