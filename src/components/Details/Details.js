import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Details extends Component {

    // function to send user back to homepage
    returnToHome = () => {
        console.log('clicked return to home');
        this.props.history.push('/');
    }

    render() {
        return(
             <button onClick={this.returnToHome}>Homepage</button>
        )
    }
}

            // withRouter for props.history.push
export default withRouter(Details);