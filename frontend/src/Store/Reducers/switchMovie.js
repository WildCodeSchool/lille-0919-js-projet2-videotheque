const initialState = { toWatchMovies: [], favoriteMovies: [], dislikeMovies: [] }

function switchMovie(state = initialState, action) {
  let newState
  switch (action.type) {
    case 'SWITCH_TOWATCH_LIST':
      const toWatchMoviesId = state.toWatchMovies.findIndex(movie => movie.id === action.value.id)
      if (toWatchMoviesId !== -1) {
        newState = {
          ...state,
          toWatchMovies: state.toWatchMovies.filter( (movie, index) => index !== toWatchMoviesId)
        }
      }
      else {
        newState = {
          ...state,
          toWatchMovies: [...state.toWatchMovies, action.value]
        }
      }
      return { 
        newState
            }
      case 'SWITCH_FAVORITE_LIST':
      const favoriteMoviesId = state.favoriteMovies.findIndex(movie => movie.id === action.value.id)
      if (favoriteMoviesId !== -1) {
        newState = {
          ...state,
          favoriteMovies: state.favoriteMovies.filter( (movie, index) => index !== favoriteMoviesId)
        }
      }
      else {
        newState = {
          ...state,
          favoriteMovies: [...state.favoriteMovies, action.value]
        }
      }
      return {
        newState
      }
      case 'SWITCH_DISLIKE_LIST':
      const dislikeMoviesId = state.dislikeMovies.findIndex(movie => movie.id === action.value.id)
      if (dislikeMoviesId !== -1) {
        newState = {
          ...state,
          dislikeMovies: state.dislikeMovies.filter( (movie, index) => index !== dislikeMoviesId)
        }
      }
      else {
        newState = {
          ...state,
          dislikeMovies: [...state.dislikeMovies, action.value]
        }
      }
      return {
        newState
      }
  default:
    return state
  }
}

export default switchMovie