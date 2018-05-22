import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


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
                <Input placeholder="Snack Name" onChange={this.handleInputChange} type="text" />
                <Button variant="outlined" color="primary" onClick={this.submitSnack}>Submit Snack</Button>
            </div>
        );
    }
}

export default connect()(SnackInput);