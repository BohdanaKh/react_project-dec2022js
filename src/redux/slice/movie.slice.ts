import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../services";
import {IError, IMovie, IPagination} from "../../interfaces";


interface IState {
    movies: IMovie[],
    page:number,
    totalPages:number,
    // prev:number;
    // next:number;
    errors: IError,
}

const initialState:IState = {
    movies:[],
    page:1,
    totalPages:null,

    // prev: null,
    // next: null,
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
                const {page,total_pages,results} = action.payload;
                state.movies = results
                state.page = page
                state.totalPages = total_pages
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