import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios'


export const fetchMovieData =  createAsyncThunk('/fetchMovieData', async (id) => { 
    const {data} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`)
    return data
})

const initialState = { 
    movieData : { 
        film : [],
        status: ''
    }
}


export const movieInfo = createSlice({
    name: 'MovieInfo',
    initialState,
    reducers: { },
    extraReducers: { 
        [fetchMovieData.pending] : (state) => { 
            state.movieData.film = []
            state.movieData.status = 'loading'
        },
        [fetchMovieData.fulfilled] : (state, action) => { 
            state.movieData.film = action.payload
            state.movieData.status = 'loaded'
        },
        [fetchMovieData.rejected] : (state) => { 
            state.movieData.film = []
            state.movieData.status = 'error'
        },
    }
})


export const infoMovie = movieInfo.reducer