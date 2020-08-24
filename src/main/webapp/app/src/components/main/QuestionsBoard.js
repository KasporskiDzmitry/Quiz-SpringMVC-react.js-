import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuestionsBoard extends Component {
    constructor(props) {
        super(props);
        this.createTable = this.createTable.bind(this);
    }

    createTable() {
        const { answeredQuestionsArray, topics, addAnsweredQuestions } = this.props;

        const tBody = [];
        for (let i = 0; i < 5; i++) {
            const tr = [];
            for (let j = 0; j < 6; j++) {
                if (j === 0) {
                    tr.push(<td key={j} className="topic">{topics[i].topic}</td>);
                } else {
                    tr.push(
                        <td
                            key={j}
                            className={answeredQuestionsArray.includes(i + "" + j) ? 'cell disable-cell' : 'cell'}
                            onClick={() => addAnsweredQuestions(i + "" + j)}
                        >
                            <Link to={`/question?topicId=${topics[i].id}&value=${j * 10}`}>{j * 10}</Link>
                        </td>
                    );
                }
            }
            tBody.push(<tr key={i}>{tr}</tr>);
        }
        return tBody;
    }

    render() {
        return (
            <div className="questionsBoard">
                <table>
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QuestionsBoard;
