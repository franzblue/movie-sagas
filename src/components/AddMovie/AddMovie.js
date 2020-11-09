import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddMovie.css';


class AddMovie extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genres_id: ''
    }

    componentDidMount = () => {
        this.getGenre();
      }
  
    // function to grab genres data
    getGenre = () => {
    console.log('in get genre')
    this.props.dispatch({type: 'GET_GENRE'})
    }

    // function to handle input fields
    handleChange = (keyname, event) => {
        this.setState( {
            [keyname]: event.target.value
        });
        console.log(this.state);
    }

    // function to send user back to homepage
    returnToHome = () => {
    console.log('clicked return to home');
    this.props.history.push('/');
    }

    onSubmit = () => {
        console.log('in submit');
        this.props.dispatch( {type: 'SAVE_MOVIE', payload: this.state});
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="inputs">
                <h2>Add Movie</h2>
                <form>
                    <div>
                        <label>Title</label>
                        <input type="text" placeholder="title" onChange={(event) => this.handleChange('title', event)}></input>
                    </div>
                    <div>
                        <label>Poster</label>
                        <input type="text" placeholder="poster URL" onChange={(event) => this.handleChange('poster', event)}></input>
                    </div>
                      
                    <label htmlFor='genre'>Choose Genre</label>
                    <select name='genre' onChange={(event) => this.handleChange('genres_id', event)}>
                    <option value=''></option>
                    {this.props.reduxState.genres.map((genres) => {
                        return <option key={genres.name} value={genres.id}>{genres.name}</option>
                    })}
                    </select>
                    { this.state.genres_id === '' ?
                    <button disabled>Save</button>
                    :
                    <button onClick={this.onSubmit}>Save</button>}
                    <button onClick={this.returnToHome}>Cancel</button>
                    <div>
                        <label>Description</label>
                        <textarea name="description" placeholder="enter description" rows="1" cols="17" onChange={(event) => this.handleChange('description', event)}></textarea>
                    </div>    
                </form>

            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })

export default connect(putReduxStateOnProps)(AddMovie);