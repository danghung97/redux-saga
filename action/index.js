import * as Types from "./actionTypes";
export const fetchMovies = () => {
  return {
    type: Types.FETCH_MOVIE,
  };
};
export const addMovie = (newMovie) => {
  return {
    type: Types.ADD_MOVIE,
    newMovie
  };
};
export const fetchsuccess = (receivedMovie) => {
  return {
    type: Types.FETCH_SUCCEEDED,
    receivedMovie
  };
} ;
export const fetchError = (error) => {
  return {
    type: Types.FETCH_FAILED,
    error
  };
};

export const editMovie = (movie) =>{
  return{
    type: Types.EDIT_MOVIE,
    movie
  }
}

export const updateMovie= (movie)=>{
  return{
    type: Types.UPDATE_MOVIE,
    movie
  }
}

export const deleteMovie=(movie)=>{
  return{
    type: Types.DELETE_MOVIE,
    movie
  }
}

export const deletesuccess=(movie)=>{
  return {
    type: Types.DELETE_SUCCESS,
    movie
  }
}
