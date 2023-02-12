import React, { Component } from 'react'

export default class ColorBox extends Component {
    constructor(props) {
        super(props);

    }
    handleClick(id) {
        this.props.onAdd(id);
    }
    render() {
        let { txt, color, id } = { ...this.props };
        return (
            <div className="card-item" style={{ backgroundColor: `${color}`, color: `${color}` == "#fff" ? "black" : "white" }} onClick={this.handleClick.bind(this, id)}>
                {txt}
            </div >
        )
    }
}
