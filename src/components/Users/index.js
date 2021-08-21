import React from 'react';
import firebase from "firebase";

class Users extends React.Component {
    state = {
        users: null
    }

    componentDidMount() {
        firebase.firestore().collection("users")
            .get()
            .then( snapchot => {
                const users = [];
                snapchot.forEach(doc => {
                    const data = doc.data();
                    users.push(data);
                })
                this.setState({users : users})
            })
            .catch( error => console.log(error))
    }

    render() {
        return (
            <div>
                <h2 className="users_title">Liste des utilisateurs</h2>
                <p className="intro">Vous trouverez ici tous les utilisateurs</p>
                {
                    this.state.users && this.state.users.map( user => {
                        return (
                            <div class="user">
                                <p>{user.name}</p>
                                <p>{user.city}</p>
                                <p>0 capture</p>
                                <a href="#">En savoir plus</a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default Users