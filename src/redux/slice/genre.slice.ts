import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {IError, IGenre} from "../../interfaces";
import {genresService} from "../../services";

interface IState {
    genres: IGenre[],
    errors: IError,
    genreId:number
}

const initialState:IState = {
    genres: [],
    errors: null,
    genreId:null
}

// @ts-ignore
const getAll = createAsyncThunk<IGenres<IGenre[]>,void>('genreSlice/getAll', async (_,{rejectWithValue}) => {
    try {
        const {data} = await genresService.getAll();
        return data
    } catch (e) {
        const err = e as AxiosError
        return rejectWithValue(err.response.data)
    }
})



const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
setGenreId:(state, action) => {
    state.genreId = action.payload;
},
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {genres} = action.payload;
             state.genres = genres;
            })

            .addMatcher(isFulfilled(), state => {
                state.errors = null
            })

            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })

});

const {actions, reducer:genreReducer} = slice;

const genreActions = {
    ...actions,
    getAll
}

export {
    genreActions,
    genreReducer
}