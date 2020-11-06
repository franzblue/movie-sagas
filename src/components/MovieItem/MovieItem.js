import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return(
            <li>{this.props.movie.title}</li>
        )
    }
}

export default MovieItem;