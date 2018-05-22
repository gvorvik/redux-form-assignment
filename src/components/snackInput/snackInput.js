import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            snack: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({
            snack: event.target.value
        });
    }

    submitSnack = () => {
        // const action = {}
        console.log(this.state.snack);
        
    };

    render() {
        return (
            <div>
                <h1>Hello Input</h1>
                <input onChange={this.handleInputChange} type="text" />
                <button onClick={this.submitSnack}>Submit Snack</button>
            </div>
        );
    }
}

export default connect()(SnackInput);