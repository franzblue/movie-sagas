import React, { Component } from 'react';
import { connect } from 'react-redux';

// withRouter to enable history.push to Details page
import { withRouter } from 'react-router-dom';


// component with movies data mapped out into this.props.movie
class MovieItem extends Component {

    // function to send user to Details page
    // need to tie in a GET request so Details can display all the right info
    posterClick = () => {
        console.log('clicked on a poster', this.props.movie);
        // dispatch to Saga and reducer
        this.props.dispatch( { type: 'GET_DETAILS', payload: this.props.movie});
        this.props.history.push('/details');
    }

    render() {
        return(
            <div>
                <li>{this.props.movie.title}</li>
                <img alt={this.props.movie.id} src={this.props.movie.poster} onClick={this.posterClick}></img>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })

export default connect(putReduxStateOnProps)(withRouter(MovieItem));