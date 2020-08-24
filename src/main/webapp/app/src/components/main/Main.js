import React, { Component } from 'react'
import {connect} from "react-redux";

import {Player} from "../player/Player";
import QuestionsBoard from "./QuestionsBoard";
import LoadingSpinner from "../util/LoadingSpinner";
import GameMenu from "./GameMenu";

import {addAnsweredQuestion} from "../../store/questions/actions";
import {loadTopics} from "../../store/questions/actions";
import {resetStore} from "../../store/actions";

class Main extends Component {
    componentDidMount() {
        const { topics, loadTopics, answeredQuestionsArray, history } = this.props;

        if (topics.length === 0) {
            fetch(`/getTopics`)
                .then(res => res.json())
                .then(json => loadTopics(json))
                .catch(err => console.log(err))
        } else if (answeredQuestionsArray.length === 25) {
            history.push("/endGame");
        }
    }

    render() {
        const { topics, players, history, answeredQuestionsArray, addAnsweredQuestion } = this.props;

        if (topics.length === 0) {
            return <LoadingSpinner />
        } else {
            return (
                <div className="container main-wrapper">
                    <Player data={players[0]} />
                    <Player data={players[1]} />
                    <QuestionsBoard
                        history={history}
                        topics={topics}
                        answeredQuestionsArray={answeredQuestionsArray}
                        addAnsweredQuestions={addAnsweredQuestion}
                    />
                    <GameMenu history={history} />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        answeredQuestionsArray: state.questions.answeredQuestionsArray,
        topics: state.questions.topics,
    }
};

const mapDispatchToProps = {
    addAnsweredQuestion,
    loadTopics,
    resetStore
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
