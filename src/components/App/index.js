import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "../Header";
import Welcomeheader from "../WelcomeHeader";
import Landing from "../Landing";
import Welcome from "../Welcome";
import Login from "../Login";
import Signin from "../Signin";
import NewCatch from "../NewCatch";
import NewBird from "../NewBird";
import ModifyBird from "../ModifyBird";
import NewCatchSuccess from "../NewCatch/success";
import Users from "../Users";
import ErrorPage from "../Errorpage";
import '../../App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcomeheader}/>
                <Route component={Header}/>
            </Switch>

            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/home" component={Welcome}/>
                <Route path="/login" component={Login}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/new-catch" component={NewCatch}/>
                <Route path="/new-bird" component={NewBird}/>
                <Route path="/modify-bird/:ring" component={ModifyBird}/>
                <Route path="/new-catch-success" component={NewCatchSuccess}/>
                <Route path="/users" component={Users}/>
                <Route component={ErrorPage}/>
            </Switch>

        </Router>
    );
}

export default App;
