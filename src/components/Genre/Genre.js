import React, { Component } from 'react';

class Genre extends Component {
    render() { 
        return(
            <p>{this.props.deets.name}</p>
        )
    }
}

export default Genre;