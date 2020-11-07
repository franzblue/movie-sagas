import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends Component {

    // function to send user back to homepage
    returnToHome = () => {
        console.log('clicked return to home');
        this.props.history.push('/');
    }

    render() {
        return(
            <>
             <button onClick={this.returnToHome}>Homepage</button>
             {JSON.stringify(this.props.reduxState.details)}
             </>
        )
    }
}

            // withRouter for props.history.push
const putReduxStateOnProps = (reduxState) => ({
    reduxState
    })

export default connect(putReduxStateOnProps)(withRouter(Details));