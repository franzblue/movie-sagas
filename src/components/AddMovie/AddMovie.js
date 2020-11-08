import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    // function to choose genre for new movie

    // handleChange = (keyname, event) => {
    //     this.setState( {
    //         ...this.state,
    //         [keyname]: event.target.value
    //     })
    // }

    handleGenre = (event) => {
        this.setState( {
            genres_id: Number(event.target.value)
        });
        console.log('selected genre is', this.state.genre_id);
    }
    
    handleTitle = (event) => {
        this.setState( {
            title: event.target.value
        });
        console.log('selected title is', this.state.title);
    }

    handlePoster = (event) => {
        this.setState( {
            poster: event.target.value
        });
        console.log('selected poster URL is', this.state.poster);
    }

    handleDescription = (event) => {
        this.setState( {
            description: event.target.value
        });
        console.log('selected description is', this.state.description);
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
            <div>
                <h2>Add Movie</h2>
                <input type="text" placeholder="title" onChange={this.handleTitle}></input>
                <input type="text" placeholder="poster URL" onChange={this.handlePoster}></input>
                <textarea name="description" rows="4" cols="23"onChange={this.handleDescription}></textarea>
                <button onClick={this.returnToHome}>Cancel</button>

                <label htmlFor='genre'>Choose Genre</label>
                <select name='genre' onChange={(event) => this.handleGenre(event)}>
                <option value=''></option>
                {this.props.reduxState.genres.map((genres) => {
                    return <option  value={genres.id}>{genres.name}</option>
                })}
                </select>
                { this.state.genres_id === '' ?
                <button disabled>Save</button>
                :
                <button onClick={this.onSubmit}>Save</button>
                }
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })

export default connect(putReduxStateOnProps)(AddMovie);