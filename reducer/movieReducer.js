//import * as Types from "../action/actionTypes";
import {FETCH_SUCCEEDED, FETCH_FAILED, UPDATE_MOVIE, DELETE_SUCCESS, FETCH_MOVIE} from '../action/actionTypes'
const initMovie={
  data:[]
}
const movieReducer = (movie = initMovie, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {...movie, loading: true}
    case FETCH_SUCCEEDED:
      return {...movie, data: action.receivedMovies, loading: false};
    case FETCH_FAILED:
      return [];
    case UPDATE_MOVIE:
      return {...movie, data: movie.data.map(mv=>{
        if(mv.id !==action.movie.id) return mv;
        return {...mv, name: action.movie.name, releaseYear: action.movie.releaseYear}
      })}
    case DELETE_SUCCESS:{
      let temp=[...movie.data]
      let index=temp.findIndex(mv=>mv.id===action.movie.id)
      temp.splice(index, 1)
      return {...movie, data: temp};
    }
    default:
      return movie;
  }
};
export default movieReducer;
