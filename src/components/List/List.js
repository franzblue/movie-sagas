import React, { Component } from 'react';
import { connect } from 'react-redux';


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
            <>
            <h1>Movies List</h1>
            {JSON.stringify(this.props.reduxState.movies)}
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })

export default connect(putReduxStateOnProps)(List);