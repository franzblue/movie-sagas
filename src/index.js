import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// more imports
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMoviesFromDatabase);
    yield takeEvery('GET_DETAILS', getDetailsForThisMovie)
    yield takeEvery('GET_GENRE', getGenresFromDatabase);
}

// generator functions
// GET function
function* getMoviesFromDatabase() {
    try {
         const moviesResponse = yield axios.get('/api/movie')
         console.log('inside GET generator function with', moviesResponse.data);
         yield put( {type: 'SET_MOVIES', payload: moviesResponse.data});
    } catch (error) {
        console.log('error fetching movies', error);
    }
}

function* getDetailsForThisMovie(action) {
    console.log('in details generator function', action);
    try {
        const movieDetails = yield axios.get(`/api/details/${action.payload.id}`) // not sure if this will work as planned
        console.log('inside getDetails generator function with', movieDetails.data[0].title);
        yield put( {type: 'SET_DETAILS', payload: movieDetails.data});
    } catch (error) {
        console.log('error fetching movie details', error);
    }
}

function* getGenresFromDatabase() {
    console.log('hitting genre function GET genres');
    try {
        const genreResponse = yield axios.get('/api/genre');
        yield put( {type: 'SET_GENRES', payload: genreResponse.data});
    } catch(error) {
        console.log('error fetching genres', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store details about individual movies
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
