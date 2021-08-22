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
                    data.catchesCount = 0;


                    let userCatches = [];

                    firebase.auth().onAuthStateChanged((user) => {

                        firebase.firestore().collection("catches")
                            .get()
                            .then( snapchot => {
                                snapchot.forEach(doc => {
                                    //doc.data().user_id == user.uid && ;
                                    //console.log(doc.data().user_id);
                                    //console.log(user.uid);
                                    userCatches.push(doc.data().user_id);
                                })
                            })
                    });

                    data.catchesCount = userCatches.length;

                    users.push(data);
                })
                this.setState({users : users})
            })
            .catch( error => console.log(error))
    }

    render() {

        const displayUsers = this.state.users && this.state.users.map((user, i) => {

            return (
                <div className="user" key={i}>
                    <p>{user.name}</p>
                    <p>{user.city} - {user.catchesCount} capture</p>
                    <a href={"mailto:"+user.email}>Contacter</a>
                </div>
            )
        })

        return (
            <div>
                <h2 className="users_title">Liste des utilisateurs</h2>
                <p className="intro">Vous trouverez ici tous les utilisateurs</p>
                {displayUsers}
            </div>
        )
    }
}


export default Users