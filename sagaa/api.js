import axios from 'axios';
const urlGetMovies = 'http://5d2156112ba8cf0014c44aac.mockapi.io/api/Movies/Movies';

function* getMoviesFromApi() {
    const response= yield axios.get(urlGetMovies)
    const movies = response.data;
    return movies;
}

function* addMoviesFromApi(newMovie){
    const response = yield axios.post(urlGetMovies,{
        name: newMovie.name,
        releaseYear: newMovie.releaseYear
    })
    return (response.status===201);
}

function* editMovieFromApi(movie){
   
    const response = yield axios.put(`${urlGetMovies}/${movie.id.toString()}`,{
        name: movie.name,
        releaseYear: movie.releaseYear
    })
    return (response.status===200);
}

function* deleteMovieFromApi(movie){
    const response= yield axios.delete(`${urlGetMovies}/${movie.id.toString()}`,{
        name: movie.name,
        releaseYear: movie.releaseYear
    })
    return (response.status===200)
}

export const Api={
    getMoviesFromApi,
    addMoviesFromApi,
    editMovieFromApi,
    deleteMovieFromApi
};

