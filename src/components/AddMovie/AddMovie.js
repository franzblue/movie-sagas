import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
    render() {
        return(
            <div>
                <h2>Add Movie</h2>
                <input type="text" placeholder="title"></input>
                <input type="text" placeholder="description"></input>
                <button>Save</button>
                <button>Cancel</button>

                <label htmlFor='genre'>Choose Genre</label>
                <select name='genre' onChange={(event) => this.handleChange(event)}>
                <option value=''></option>
                {this.props.reduxState.genres.map((genre) => {
                    return <option  value={genre.id}>{genre.name}</option>
                })}
                </select>

            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })

export default connect(putReduxStateOnProps)(AddMovie);