import React, { Component } from "react";

import LoadingSpinner from "../util/LoadingSpinner";

class LeaderBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            currentPage: 0
        };
        this.createRows = this.createRows.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        fetch(`/getLeaders`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }))
            .catch(err => console.log(err))
    }

    createRows() {
        const { data, currentPage } = this.state;
        if (data.length > 0) {
            let rows = [];
            const limit = 5;
            for (let i = 0, j = 10; i < limit; i++, j++) {
                if (data[currentPage * limit + i]) {
                    rows.push(
                        <tr key={i}>
                            <td key={j + 1}>{currentPage * limit + i + 1}</td>
                            <td key={j + 2}>{data[currentPage * limit + i].name}</td>
                            <td key={j + 3}>{data[currentPage * limit + i].datetime}</td>
                            <td key={j + 4}>{data[currentPage * limit + i].score}</td>
                        </tr>
                    );
                }
            }
            return rows;
        }
    }

    onClick(e) {
        switch (e.target.id) {
            case "newGame":
                this.props.history.push("/");
                break;
            case "prev":
                this.setState( { currentPage: this.state.currentPage - 1 });
                break;
            case "next":
                this.setState( { currentPage: this.state.currentPage + 1 });
                break;
            default:
                break;
        }
    }

    render() {
        if (!this.state.data) {
            return <LoadingSpinner />
        } else {
            return (
                <div className="container">
                    <div className="leadersBoard">
                        <button id="newGame" onClick={this.onClick}>Новая игра</button>
                        <table id="ratingTable">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%'}}>№</th>
                                    <th style={{ width: '40%'}}>Имя</th>
                                    <th style={{ width: '30%'}}>Дата</th>
                                    <th style={{ width: '20%'}}>Счет</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.createRows()}
                            </tbody>
                        </table>
                        {
                            this.state.currentPage === 0
                                ? null
                                : <button onClick={this.onClick} id="prev">Предыдущая</button>
                        }
                        {
                            this.state.currentPage === 3 | !this.state.data[this.state.currentPage * 5 + 5]
                                ? null
                                : <button onClick={this.onClick} id="next" style={{float: "right"}}>Следующая</button>
                        }
                    </div>
                </div>
            );
        }
    }
}

export default LeaderBoard;
