import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

// withRouter to enable history.push to Details page
import { withRouter } from 'react-router-dom';


// component with movies data mapped out into this.props.movie
class MovieItem extends Component {

    state = {
        movieDetailsObject: {}
    }

    // function to send user to Details page
    // need to tie in a GET request so Details can display all the right info
    posterClick = () => {
        console.log('clicked on a poster', this.props.movie);
        // dispatch to Saga and reducer
        this.props.dispatch( { type: 'GET_DETAILS', payload: this.props.movie});
        this.props.history.push('/details');

        // maybe instead have the axios.get request here
        // can use 'api/details/:${this.props.movie.id}' ???


        // axios.get(`api/details/${this.props.movie.id}`).then((response) => {
        //     console.log('GET back from server with movie details', response.data);
        //     this.setState( {
        //     movieDetailsObject: response.data
        //     })
        //     console.log(this.state.movieDetailsObject);
        //     this.props.dispatch( {type: '', payload: this.state.movieDetailsObject});
        // }).catch((error) => {
        //     console.log('GET error', error);
        // })

        // I will most likely not need this GET request but I will not delete it quite yet
    }

    render() {
        return(
            <>
                <li>{this.props.movie.title}</li>
                <img alt={this.props.movie.id} src={this.props.movie.poster} onClick={this.posterClick}></img>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })

export default connect(putReduxStateOnProps)(withRouter(MovieItem));