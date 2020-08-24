import React, { Component } from "react";
import Portal from "./Portal";

class Modal extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (e.target.id === "overlay") {
            this.props.onCancel();
        }
    }

    render() {
        return (
            <>
                {this.props.isOpen && (
                    <Portal>
                        <div className="modalOverlay" id="overlay" onClick={this.onClick}>
                            <div className="modalWindow">
                                <div className="modalBody">{this.props.children}</div>
                                <div className="modalFooter">
                                    <button onClick={this.props.onCancel}>Отмена</button>
                                    <button onClick={this.props.onSubmit}>OK</button>
                                </div>
                            </div>
                        </div>
                    </Portal>
                )}
            </>
        );
    }
}

export default Modal;
