import React, { Component } from "react";
import {connect} from "react-redux";

import LoadingSpinner from "../util/LoadingSpinner";
import {changeScore, switchPlayer} from "../../store/players/actions";

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            userAnswer: '',
            showResult: false,
            answerIsCorrect: false
        };
        this.answer = this.answer.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        const searchParams = new URLSearchParams(this.props.location.search);
        let data = {};
        for (let params of searchParams.entries()) {
            data[params[0]] = +params[1];
        }
        fetch(`/getQuestion?topicId=${data.topicId}&value=${data.value}`)
            .then(res => res.json())
            .then(question => this.setState({ question }))
            .catch(err => console.log(err))
    }

    onInputChange(e) {
        e.preventDefault();
        this.setState({userAnswer: e.target.value});
    }

    answer(e) {
        e.preventDefault();
        const { question, userAnswer } = this.state;
        const { players, changeScore } = this.props;

        this.setState({showResult: true}, () => {
            if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
                this.setState({answerIsCorrect: true}, () => {
                    players.forEach(i => i.isActive ? changeScore(i.id, question.value) : null)
                })
            }
        });

        setTimeout(() => {
            this.props.switchPlayer();
            this.props.history.push('/main');
        }, 2500);
    }

    render() {
        if (!this.state.question) {
            return <LoadingSpinner />;
        } else {
            return (
                <div className="container">
                    <div className="question-wrapper">
                        <div className="question-image"
                             style={{
                                 background: `url(https://quizdz.herokuapp.com/getImage?id=${this.state.question.id}) no-repeat`,
                                 backgroundPosition: 'center',
                                 backgroundSize: 'contain'
                             }}>
                        </div>
                        <div className="question-text">{this.state.question.text}</div>
                        {
                            this.state.showResult
                                ?
                                <div className="answer-result-wrapper">
                                    <div className="answer-result-text">
                                        {
                                            this.state.answerIsCorrect
                                                ? <><i id="right-icon" className="fa fa-check-circle" aria-hidden="true"></i><span>Правильно</span></>
                                                : <><i id="wrong-icon" className="fa fa-times-circle" aria-hidden="true"></i><span>Неправильно: </span><span>{this.state.question.answer}</span></>
                                        }
                                    </div>
                                </div>
                                :
                                <div className="question-form">
                                    <form onSubmit={this.answer}>
                                        <input
                                            type="text"
                                            onChange={this.onInputChange}
                                            autoFocus
                                            required
                                        />
                                        <button type="submit">Ответ</button>
                                    </form>
                                </div>
                        }
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
};

const mapDispatchToProps = {
    changeScore,
    switchPlayer
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);
