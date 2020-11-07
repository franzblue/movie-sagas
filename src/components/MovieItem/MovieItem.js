import React, { Component } from 'react';


// component with movies data mapped out into this.props.movie
class MovieItem extends Component {

    posterClick = () => {
        console.log('clicked on a poster', this.props.movie);
    }

    render() {
        return(
            <>
                <li>{this.props.movie.title}</li>
                <img src={this.props.movie.poster} onClick={this.posterClick}></img>
            </>
        )
    }
}

export default MovieItem;