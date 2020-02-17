import { fork,call } from 'redux-saga/effects';
import { watchFetchMovies, watchAddMovies, watchEditMovie, } from './Moviesaga';
import {watchDeleteMovie} from './deleteMoviesaga'

export default function* rootSaga() {
    console.warn('root saga')
    // yield call(watchAddMovies);
    // yield call(watchFetchMovies);
    //yield [call(watchFetchMovies),call(watchAddMovies)];
    // yield [
    //     fork(watchFetchMovies),
    //     fork(watchAddMovies)
    // ];        
    yield fork(watchAddMovies),
    yield fork(watchFetchMovies),
    yield fork(watchEditMovie),
    yield fork(watchDeleteMovie)
}
