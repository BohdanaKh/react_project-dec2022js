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
    movie:IMovie,
    movieByGenre:IMovie,
    searchMovie:string
}

const initialState:IState = {
    page:1,
    movies:[],
    totalPages:null,
    errors: null,
    movie:null,
    movieByGenre:null,
    searchMovie:null
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

    // (+query.get('page')+1)

const getMovieByGenre = createAsyncThunk<IPagination<IMovie[]>,string>(
    'movieSlice/getAll',
    async (id,{rejectWithValue}) => {
        // const [query] = useSearchParams();
        try {
            const {data:movies} = await movieService.getByGenre(1,id);
            return movies
        } catch (e) {
           const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getById = createAsyncThunk<IMovie,{id:string}>(
    'movieSlice/getById',
    async ({id},{rejectWithValue}) => {
            try {
                const {data:movie} = await movieService.getById(id);
                return movie
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)





// const searchByValue = createAsyncThunk<IPagination<IMovie[]>,string> (
//     'movieSlice/searchByValue',
//     async (_,{rejectWithValue}) => {
//         try {
//             const {data} = await movieService.searchByValue(searchMovie);
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             return rejectWithValue(err.response.data)
//         }
//     }
// )



const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.movies = results
            state.page = page
            state.totalPages = total_pages
        },
        setMovieByGenre: (state, action) => {
            state.movieByGenre = action.payload;
            //     state.movies.filter( item=>item.genre_ids.includes(16));
            //
        },
        // setSearchValue: (state, action) => {
        //     state.searchValue = action.payload;
        // },

        setSearchMovie: (state, action) =>{
    // const {page, total_pages, results} = action.payload;
    // state.movies = results
    //         state.page = page
    //         state.totalPages = total_pages
    //         state.movies.push(action.payload.movie)
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
            .addCase(getMovieByGenre.fulfilled, (state, action) => {
                const {page,total_pages,results} = action.payload;
                    state.movies = results
                    state.page = page
                    state.totalPages = total_pages
            })


            // .addCase(searchByValue.fulfilled, (state, action) => {
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
    getMovieByGenre,
    getById,
    // searchByValue
}

export {
    movieActions,
    movieReducer
}