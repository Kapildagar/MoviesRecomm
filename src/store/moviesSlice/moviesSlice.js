import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchmovies=createAsyncThunk('movies/fetchmovies', async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5b3006765f2e152b781df0121aa15d51"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
})

export const fetchupcominmovies=createAsyncThunk("movies/fetchupcomingmovies",async()=>{
     try{
           const response=await axios.get(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=5b3006765f2e152b781df0121aa15d51");
            return response.data;
           }
           catch(error){
            console.log(error)
           }
})

export const fetchtopratedmovies=createAsyncThunk("movies/fetchtopratedmovies",async()=>{
  try{
        const response=await axios.get(
         "https://api.themoviedb.org/3/movie/top_rated?api_key=5b3006765f2e152b781df0121aa15d51");
         return response.data;
        }
        catch(error){
         console.log(error)
        }
})



const movieSilce=createSlice({
      name:"movies",
      initialState:{
      movies:{},
      upcoming:{},
      toprated:{},
      status:'idle',
      error:null,
      type:"movie"
    },
    
      
      
      extraReducers(builder) {
        builder
          .addCase(fetchmovies.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchmovies.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.movies = action.payload
          })
          .addCase(fetchmovies.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
          .addCase(fetchupcominmovies.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.upcoming=action.payload
          })
          .addCase(fetchtopratedmovies.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.toprated=action.payload
          })
        
      }
    
      
})

export default movieSilce.reducer

export const selectAllmovies = state => state.movies.movies
export const selectAllstatus= state=>state.movies.status
export const selectAllupcoming=state=>state.movies.upcoming
export const selectAlltoprated=state=>state.movies.toprated
export const selectedtype=state=>state.movies.type