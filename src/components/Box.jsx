import React, {Component} from 'react'

class Box extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked: true
        }
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck() {
        this.setState({
            checked: !this.state.checked
        })
    }
    render() {
        let msg;
        this.state.checked ? msg = 'checked' : msg = 'unchecked';
        return (
            <div>
                <input type="checkbox" 
                       onChange={this.handleCheck}
                       defaultChecked={this.state.checked}
                />
                <p>This box is {msg}</p>
            </div>
        )
    }
}

export default Box