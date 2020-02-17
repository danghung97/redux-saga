import { FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE, EDIT_MOVIE, UPDATE_MOVIE } from '../action/actionTypes';
import { put, takeLatest } from 'redux-saga/effects';
import {Api} from './api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();   
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}

export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIE, fetchMovies);
}
    
function* addMovies(action){ 
    try{
        const result= yield Api.addMoviesFromApi(action.newMovie)
        if(result){
            yield put({ type: FETCH_MOVIE })
        }
    } catch(error){
        
    }
}

export function* watchAddMovies(){
    yield takeLatest(ADD_MOVIE, addMovies);
}

function *editMovie(action){
    try{
        const result = yield Api.editMovieFromApi(action.movie)
        if(result){
            yield put({ type: UPDATE_MOVIE, movie: action.movie })
        }
    }
    catch(error){

    }
}

export function* watchEditMovie(){
    yield takeLatest(EDIT_MOVIE, editMovie)
}



