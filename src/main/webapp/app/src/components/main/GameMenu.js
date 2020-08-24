import React, { Component } from "react";
import Modal from "../util/Modal";
import {Link} from "react-router-dom";

class GameMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            modalMessage: "",
            modalSubmitEvent: null
        };

        this.onClick = this.onClick.bind(this);
        this.handleModalSubmit = this.handleModalSubmit.bind(this);
        this.handleModalCancel = this.handleModalCancel.bind(this);
    }

    onClick(e) {
        e.preventDefault();

        switch (e.target.id) {
            case "newGameButton":
                this.setState({
                    modalMessage: "Начать новую игру?",
                    modalSubmitEvent: () => {this.props.history.push("/")},
                    modalIsOpen: true,
                });
                break;
            case "endGameButton":
                this.setState({
                    modalMessage: "Завершить игру?",
                    modalSubmitEvent: () => {this.props.history.push("/endGame")},
                    modalIsOpen: true,
                });
                break;
            default:
                break;
        }
    }

    handleModalSubmit() {
        this.setState({ modalIsOpen: false }, () => this.state.modalSubmitEvent());
    }

    handleModalCancel() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div className={this.props.className || 'menu'}>
                <button onClick={this.onClick} id="newGameButton">Новая игра</button>
                <button id="leadersButton">
                    <Link to="/leaders" target="_blank">Лидеры</Link>
                </button>
                <button onClick={this.onClick} id="endGameButton">Завершить игру</button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onCancel={this.handleModalCancel}
                    onSubmit={this.handleModalSubmit}
                >
                    <p>{this.state.modalMessage}</p>
                </Modal>
            </div>
        );
    }
}

export default GameMenu;
