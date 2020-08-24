import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux';
import logger from "redux-logger";

import rootReducer from './store/reducers';

import Question from "./components/question/Question";
import StartGame from "./components/start_game/StartGame";
import LeaderBoard from "./components/end_game/LeaderBoard";
import Main from "./components/main/Main";
import EndGame from "./components/end_game/EndGame";


class App extends Component {
    render () {
        const store = createStore(rootReducer, applyMiddleware(logger));

        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={StartGame} />
                    <Route exact path="/main" component={Main} />
                    <Route exact path="/question" component={Question} />
                    <Route exact path="/endGame" component={EndGame} />
                    <Route exact path="/leaders" component={LeaderBoard} />
                </Router>
            </Provider>
        );
    }
}

export default App;
