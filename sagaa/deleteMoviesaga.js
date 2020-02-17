import { Api } from './api';
import {put, takeLatest} from 'redux-saga/effects';
import {DELETE_MOVIE, DELETE_SUCCESS} from '../action/actionTypes';

function* deleteMovie(action){
    try{
        const result= yield Api.deleteMovieFromApi(action.movie)
        console.warn(action.movie)
        if(result){
            yield put({type: DELETE_SUCCESS, movie: action.movie})
        }
    } catch(error){

    }
}

export function* watchDeleteMovie(){
    yield takeLatest(DELETE_MOVIE, deleteMovie);
}
