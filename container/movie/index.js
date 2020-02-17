import { connect } from 'react-redux';
import { addMovie, fetchMovies, editMovie, deleteMovie } from '../../action/index';
import MovieComponent from '../../components/movie/index';
  
const mapStateToProps = (state) => {        
  return {        
      movies: state.MovieReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {    
      onFetchMovies: () => {                        
          dispatch(fetchMovies());
      }, 
    
      onAddMovie: (newMovie) => {     
          dispatch(addMovie(newMovie));
      },

      onEditMovie: (movie)=>{
        dispatch(editMovie(movie));
      },

      onDeleteMovie: (movie)=>{
        dispatch(deleteMovie(movie))
      }
  };
}
  export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);