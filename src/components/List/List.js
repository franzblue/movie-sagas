import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';


// this component will GET movies from database
class List extends Component {

    // page load GET request
    componentDidMount = () => {
        this.getMovies();
    }

    // function to dispacth a GET request
    getMovies = () => {
        console.log('in getMovies');
        this.props.dispatch( {type:'GET_MOVIES'})
    }

    render() {
        return(
            // need to map out movies data and pass it down to item component
            <>
            {this.props.reduxState.movies.map((movie) => {
                return <ul key={movie.id}>
                            <MovieItem movie={movie} />
                        </ul>
            })}
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })

export default connect(putReduxStateOnProps)(List);