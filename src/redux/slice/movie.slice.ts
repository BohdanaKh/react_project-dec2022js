import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IError, IMovie, IPagination} from "../../interfaces";




interface IState {
    page:number,
    movies: IMovie[],
    totalPages:number,
    errors: IError,
    searchValue:string;

}


const initialState:IState = {
    page:1,
    movies:[],
    totalPages:null,
    errors: null,
    searchValue:null

}


const getAll = createAsyncThunk<IPagination<IMovie[]>,number>(
    'movieSlice/getAll',
    async (page,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
           const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)



const getMovieByGenre = createAsyncThunk<IPagination<IMovie[]>,{with_genres:string,page:number}>(
    'movieSlice/getAll',
    async ({with_genres,page},{rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenre(with_genres,page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const searchByValue = createAsyncThunk<IPagination<IMovie[]>, {query:string,page:number}> (
    'movieSlice/searchByValue',
    async ({query,page},{rejectWithValue}) => {
        try {
            const {data} = await movieService.searchByValue(query,page);
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

        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },


        setPage: (state, action) => {
            state.page = action.payload;
        }

    },

    extraReducers: builder =>
        builder

            .addMatcher(isFulfilled(getAll,getMovieByGenre,searchByValue), (state,action) => {
                const {page,total_pages,results} = action.payload;
                state.movies = results
                state.page = page
                state.totalPages = total_pages
                state.errors = null
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
    getAll,
    getMovieByGenre,
    // getById,
    searchByValue
}

export {
    movieActions,
    movieReducer,
}
