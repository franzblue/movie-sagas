import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Details extends Component {

    returnToHome = () => {
        console.log('clicked return to home');
        this.props.history.push('/');
    }

    render() {
        return(
            <>
             <h2>Details</h2>
             <button onClick={this.returnToHome}>Homepage</button>
            </>
        )
    }
}

export default withRouter(Details);