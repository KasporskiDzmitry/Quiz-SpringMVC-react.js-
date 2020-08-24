import React, { Component } from "react";

import winner from '../../images/winner2.png'
import GameMenu from "../main/GameMenu";
import { connect } from "react-redux";
import {resetStore} from "../../store/actions";


class EndGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: props.players[0].score >= props.players[1].score ? props.players[0] : props.players[1]
        }
    }
    componentDidMount() {
        this.props.resetStore();

        fetch(`/saveResult`, {
            method: 'POST',
            body: JSON.stringify(this.state.winner),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(err => {
            console.log(err)
        });
    }

    render() {
        const { name, score } = this.state.winner;

        return (
            <div className="container">
                <GameMenu className="menu end_game_menu" history={this.props.history}/>
                <div className="end_game">
                    <div className="winner_name">{name}</div>
                    <div className="winner_score">{score}</div>
                    <figure>
                        <img src={winner} alt=""/>
                    </figure>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    };
};

const mapDispatchesToProps = {
    resetStore
};

export default connect(mapStateToProps, mapDispatchesToProps)(EndGame);