import React, { Component } from 'react';


// component with movies data mapped out into this.props.movie
class MovieItem extends Component {
    render() {
        return(
            <>
                <li>{this.props.movie.title}</li>
                <img src={this.props.movie.poster}></img>
            </>
        )
    }
}

export default MovieItem;