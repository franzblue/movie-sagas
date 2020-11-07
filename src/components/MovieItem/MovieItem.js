import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'


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
        this.props.dispatch( { type: 'GET_DETAILS', payload: this.props.movie.id})

        // mauybe instead have the axios.get request here
        // can use 'api/movie/:${this.props.movie.id}' ???


        // axios.get(`api/movie/${this.props.movie.id}`).then((response) => {
        //     console.log('GET back from server with movie details', response.data);
        //     this.setState( {
        //     movieDetailsObject: response.data
        //     })
        //     console.log(this.state.movieDetailsObject);
        //     this.props.dispatch( {type: '', payload: this.state.movieDetailsObject});
        // }).catch((error) => {
        //     console.log('GET error', error);
        // })
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

export default connect(putReduxStateOnProps)(MovieItem);