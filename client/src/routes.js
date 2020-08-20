import React, { Component } from 'react';


// Router
import { BrowserRouter, Route, Switch } from "react-router-dom";


// Pages
import GameSettings from './pages/GameSettings';
import Game from './pages/Game';


class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/chat" component={GameSettings} />
                    <Route path="/chat" component={Game} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;