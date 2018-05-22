import React, { Component } from 'react';
import {connect} from 'react-redux';


const mapReduxStateToProps = (reduxState) => (
    {reduxState}
);



class SnackList extends Component {

  render() {

    let snackList = this.props.reduxState.firstReducer.map((snack, i) => {
        return <li key={i}>{snack}</li>
    });

    return (
      <div>
        <h1>Hello SnackList</h1>
        <ul>
            {snackList}
        </ul>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(SnackList);