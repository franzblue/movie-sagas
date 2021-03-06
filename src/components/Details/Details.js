import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Genre from '../Genre/Genre';
import './Details.css';

class Details extends Component {

    // function to send user back to homepage
    returnToHome = () => {
        console.log('clicked return to home');
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="deets">
                <div className="description">
                    <button onClick={this.returnToHome}>Homepage</button>
                    <h2>Description</h2>
                    {/* this weird string of code is to prevent duplicate titles */}
                    {this.props.reduxState.details[0] && 
                    <p>{this.props.reduxState.details[0].description}</p>}
                </div>
               

                    <div className="genre">
                        <h2>Genre</h2>
                        {this.props.reduxState.details.map((deets) => {
                        return <Genre deets={deets} key={deets.id}/>})}
                    </div>
            </div>
        )
    }
}

            // withRouter for props.history.push
const putReduxStateOnProps = (reduxState) => ({
    reduxState
    })

export default connect(putReduxStateOnProps)(withRouter(Details));