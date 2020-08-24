import React, { Component } from "react";
import { connect } from "react-redux";

import { setName } from "../../store/players/actions";
import {resetStore} from "../../store/actions";

class StartGame extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        this.props.resetStore();
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.history.push("/main");
    }

    onInputChange(e) {
        e.preventDefault();
        this.props.setName(e.target.id, e.target.value);
    }

    render() {
        const player0Name = this.props.players[0].name;
        const player1Name = this.props.players[1].name;

        return (
            <div className="start_game">
                <form onSubmit={this.onSubmit}>
                    <h1>Новая</h1>
                    <h1>Игра</h1>
                    <label htmlFor="player_1_name">Игрок 1</label>
                    <input
                        type="text"
                        id="0"
                        value={player0Name}
                        onChange={this.onInputChange}
                        maxLength="10"
                        required
                    />
                    <label htmlFor="player_2_name">Игрок 2</label>
                    <input
                        type="text"
                        id="1"
                        value={player1Name}
                        onChange={this.onInputChange}
                        maxLength="10"
                        required
                    />

                    <button type="submit">Старт</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchesToProps = {
    setName,
    resetStore
};

export default connect(mapStateToProps, mapDispatchesToProps)(StartGame);
