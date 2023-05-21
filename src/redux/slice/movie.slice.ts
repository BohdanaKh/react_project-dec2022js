import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IError, IMovie, IPagination} from "../../interfaces";



interface IState {
    page:number,
    movies: IMovie[],
    totalPages:number,
    errors: IError,
    // movie:IMovie,
    loading:boolean,
    trigger :boolean
    // movieByGenre:IMovie
}


const initialState:IState = {
    page:1,
    movies:[],
    totalPages:null,
    errors: null,
    // movie:null,
    loading:false,
    trigger: false
    // movieByGenre:null,
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

    // (+query.get('page')+1)

// const getMovieByGenre = createAsyncThunk<IPagination<IMovie[]>,string>(
//     'movieSlice/getAll',
//     async (id,{rejectWithValue}) => {
//         // const [query] = useSearchParams();
//         try {
//             const {data} = await movieService.getByGenre(id);
//             return data
//         } catch (e) {
//            const err = e as AxiosError
//             return rejectWithValue(err.response.data)
//         }
//     }
// )


const getMovieByGenre = createAsyncThunk<IPagination<IMovie[]>,string>(
    'movieSlice/getAll',
    async (selectedGenres,{rejectWithValue}) => {
        // const [query] = useSearchParams();
        try {
            const {data} = await movieService.getByGenre(selectedGenres);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)




// const getById = createAsyncThunk<IMovie,{id:string}>(
//     'movieSlice/getById',
//     async ({id},{rejectWithValue}) => {
//             try {
//                 const {data} = await movieService.getById(id);
//                 return data
//         } catch (e) {
//             const err = e as AxiosError
//             return rejectWithValue(err.response.data)
//         }
//     }
// )






const searchByValue = createAsyncThunk<IPagination<IMovie[]>, string> (
    'movieSlice/searchByValue',
    async (text,{rejectWithValue}) => {
        try {
            const {data} = await movieService.searchByValue(text);
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
        // setMovies: (state, action) => {
        //     const {page, total_pages, results} = action.payload;
        //     state.movies = results
        //     state.page = page
        //     state.totalPages = total_pages
        // },
        // setMovieByGenre: (state, action) => {
        //     state.movieByGenre = action.payload;
        //     //     state.movies.filter( item=>item.genre_ids.includes(16));
        //     //
        // },
        // setSearchValue: (state, action) => {
        //     state.searchValue = action.payload;
        // },

//         setSearchMovie: (state, action) =>{
//     // const {page, total_pages, results} = action.payload;
//     // state.movies = results
//     //         state.page = page
//     //         state.totalPages = total_pages
//     //         state.movies.push(action.payload.movie)
//             const {page,results,total_pages} = action.payload;
//             state.movies = results
//             state.page = page
//             state.totalPages = total_pages
// },
    //     setMovie: (state, action) => {
    //         state.movie = action.payload
    //     }

        setPage: (state, action) => {
            state.page = action.payload;
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
            //
            // // .addCase(getMovieByGenre.fulfilled, (state,action) => {
            // //  return action.payload
            // // })
            //
            //
            // .addCase(searchByValue.fulfilled, (state, action) => {
            //  return action.payload
            //
            // })


            // .addCase(getById.fulfilled, (state, action) => {
            //     console.log("Fetched Successfully!");
            //     state.movie = action.payload
                //return { ...state, movie: action.payload };
            // })
            // .addCase(getById.pending, (state) => {
            //                 state.loading = true;
            //     console.log("Loading");
            // })


            .addMatcher(isFulfilled(getAll,getMovieByGenre,searchByValue), (state,action) => {
                const {page,total_pages,results} = action.payload;
                state.movies = results
                state.page = page
                state.totalPages = total_pages
                state.errors = null
                console.log(state.movies);
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
