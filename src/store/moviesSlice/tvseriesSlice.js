import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchseries=createAsyncThunk('tvshow/fetchseries', async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=5b3006765f2e152b781df0121aa15d51"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
})

export const fetchupcominseries=createAsyncThunk("tvshow/fetchupcomingseries",async()=>{
     try{
           const response=await axios.get(
            "https://api.themoviedb.org/3/tv/upcoming?api_key=5b3006765f2e152b781df0121aa15d51");
            return response.data;
           }
           catch(error){
            console.log(error)
           }
})

export const fetchtopratedseries=createAsyncThunk("tvshow/fetchtopratedseries",async()=>{
  try{
        const response=await axios.get(
         "https://api.themoviedb.org/3/tv/top_rated?api_key=5b3006765f2e152b781df0121aa15d51");
         return response.data;
        }
        catch(error){
         console.log(error)
        }
})



const seriesSilce=createSlice({
      name:"tvshow",
      initialState:{
      tvshow:{},
      tvupcoming:{},
      tvtoprated:{},
      status:'idle',
      error:null,
      type:"tv"
    },
    
      
      
      extraReducers(builder) {
        builder
          .addCase(fetchseries.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchseries.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.tvshow = action.payload
          })
          .addCase(fetchseries.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
          .addCase(fetchupcominseries.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.tvupcomingupcoming=action.payload
          })
          .addCase(fetchtopratedseries.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.tvtoprated=action.payload
          })
        
      }
    
      
})

export default seriesSilce.reducer

export const selectAllseries = state => state.tvshow.tvshow
export const selectAllstatus= state=>state.tvshow.status
export const selectAlltvupcoming=state=>state.tvshow.tvupcoming
export const selectAlltvtoprated=state=>state.tvshow.tvtoprated
export const selectedtypes=state=>state.tvshow.type