import React from 'react';
import Header from "../Header";
import Landing from "../Landing";
import Welcome from "../Welcome";
import Login from "../Login";
import Signin from "../Signin";
import ErrorPage from "../Errorpage";
import '../../App.css';

function App() {
    return (
        <div>
            <Header/>

            <Welcome/>
            <Login/>
            <Signin/>
            <ErrorPage/>

            <Landing/>
        </div>
    );
}

export default App;
