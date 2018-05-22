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
        const action = {
            type: 'SNACK_INPUT',
            snack: this.state.snack,
        }
        this.props.dispatch(action);
    };

    render() {
        return (
            <div>
                <h3>Enter a Snack</h3>
                <input onChange={this.handleInputChange} type="text" />
                <button onClick={this.submitSnack}>Submit Snack</button>
            </div>
        );
    }
}

export default connect()(SnackInput);