import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../services";
import {IError, IMovie, IPagination} from "../../interfaces";


interface IState {
    page:number,
    movies: IMovie[],
    totalPages:number,
    errors: IError,
    movie:IMovie
}

const initialState:IState = {
    page:null,
    movies:[],
    totalPages:null,
    errors: null,
    movie:null
}


// const getAll = createAsyncThunk<IPagination<IMovie[]>,void>(
//     'movieSlice/getAll',
//     async (_,{rejectWithValue}) => {
//         try {
//             const {data} = await movieService.getAll();
//             return data
//         } catch (e) {
//            const err = e as AxiosError
//             return rejectWithValue(err.response.data)
//         }
//     }
// )


const getById = createAsyncThunk<IMovie,{id:string}>(
    'movieSlice/getById',
    async ({id},{rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
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
setMovies: (state, action) => {
    const {page,total_pages,results} = action.payload;
    state.movies = results
    state.page = page
    state.totalPages = total_pages
}
    },
    extraReducers: builder =>
        builder
            // .addCase(getAll.fulfilled, (state, action) => {
            //     const {page,total_pages,results} = action.payload;
            //     state.movies = results
            //     state.page = page
            //     state.totalPages = total_pages
            // })

            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload;

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
    // getAll,
    getById
}

export {
    movieActions,
    movieReducer
}