import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../store/moviesSlice/moviesSlice'
import tvshowReducer from "../store/moviesSlice/tvseriesSlice"
export default configureStore({
  reducer: {
    movies:moviesReducer,
    tvshow:tvshowReducer
  }
})


