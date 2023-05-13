import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IError, IMovie, IPagination} from "../../interfaces";


interface IState {
    movies: IMovie[],
    prev:string,
    next:string,
    errors: IError,
}

const initialState:IState = {
    movies:[],
    prev:null,
    next:null,
    errors: null,
}


const getAll = createAsyncThunk<IPagination<IMovie[]>,void>(
    'movieSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
           const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)



const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {prev, next, results} = action.payload;
                state.movies = results
                state.prev = prev
                state.next = next
            })

            .addMatcher(isFulfilled(), state => {
                state.errors = null
            })

            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })

});

const {actions, reducer:movieReducer} = slice;

const movieActions = {
    ...actions,
    getAll
}

export {
    movieActions,
    movieReducer
}