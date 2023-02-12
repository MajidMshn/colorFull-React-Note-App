import React, { Component } from 'react'
import './Note.css';
import ColorBox from './ColorBox';
import { RiEraserFill } from 'react-icons/ri';
import { MdAddCircleOutline } from 'react-icons/md';


export default class NoteMain extends Component {
    constructor(props) {

        super(props);
        this.state = {
            colors: [
                "#bcb88a", "#679267", "#7a67ee",
                "#74c365", "#e9967a", "#ab92b3",
                "#ffbf00", "#005b96", "#fff",
                "#b3cde0", "#ae0001"
            ],
            activeColor: "#fff",
            inpVal: '',

            boxes: []
        }

    }
    changeBackColor(item) {
        this.setState({ activeColor: item })
    }
    getInputVal(event) {
        event.preventDefault();
        let id = this.state.boxes.length + 1;
        let color = this.state.activeColor;
        let txt = this.state.inpVal;
        if (txt !== '') {
            this.setState({ boxes: [...this.state.boxes, { id, txt, color }] });
            this.setState({ inpVal: '' });
            this.setState({ activeColor: "#fff" })

        }

    }
    handleInput(event) {
        this.setState({ inpVal: event.target.value });
    }
    handleDelColorBox(id) {
        let ans = window.confirm("are you sure to delet?");
        if (ans) {

            let list = [...this.state.boxes];
            let target = list.findIndex((item) => (item.id === id));
            list.splice(target, 1);
            this.setState({ boxes: list })
        }
    }
    removeAllBoxes() {
        let ans = window.confirm("are you sure to delet all boxes?");
        if (ans) {
            this.setState({ boxes: [] });
        }
    }
    // -------------------------------------
    render() {
        return (
            <div className='noteContainer'>
                <h1>SHANINA NOTE APP</h1>
                <div className="formOptions">
                    <form onSubmit={this.getInputVal.bind(this)}>
                        <div className='formInputs'>
                            <input type="text" value={this.state.inpVal}
                                style={{ backgroundColor: this.state.activeColor }}
                                onChange={this.handleInput.bind(this)}

                            />
                        </div>
                        <div className='formColors'>
                            {this.state.colors.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    style={{ backgroundColor: item }}
                                    onClick={this.changeBackColor.bind(this, item)}
                                ></button>
                            ))}
                        </div>
                        <div className='formButtons'>
                            <button className='add-btn' type='submit'>
                                <MdAddCircleOutline />
                            </button>

                            <button className='del-btn' onClick={this.removeAllBoxes.bind(this)}>
                                <RiEraserFill />
                            </button>
                        </div>
                    </form>


                </div>

                <div className="card-container">
                    {
                        this.state.boxes.map((item) => (
                            <ColorBox {...item} key={item.id}
                                onAdd={this.handleDelColorBox.bind(this)} />
                        ))
                    }

                </div>
            </div>
        )
    }
}
