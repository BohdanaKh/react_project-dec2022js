import React, {FC, useEffect, useState} from "react";

import {GenreBadge, MoviePagination, MoviesList} from "../components";
import {genreActions, movieActions} from "../redux";
import {useAppDispatch, useAppSelector} from "../hooks";
import {useSearchParams} from "react-router-dom";
import {IMovie} from "../interfaces";
import {SubmitHandler} from "react-hook-form";




const MoviesPage:FC = () => {

    // let {genres,selectedGenres} = useAppSelector(state => state.genreReducer);
    let {genres} = useAppSelector(state => state.genreReducer);
    let {selectedGenres,page,query} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch();
    // const [query,setQuery] = useState(null);



    useEffect(() => {
        dispatch(genreActions.getAll())
    },[dispatch])

    const with_genres:string = selectedGenres.join(',');
    console.log(with_genres);

    const foo = async () =>{
        await dispatch(movieActions.getMovieByGenre({with_genres,page}))
        dispatch(movieActions.setQuery( with_genres));
    }



    return (
        <div className={'page'}>

            <div className={'genres_wrap'}>

                    {genres.map((genre) => (<GenreBadge key={genre.id} genre={genre}/>))}
                {/*<button className={'filter_button'} type={'button'} onClick={() =>  dispatch(movieActions.getMovieByGenre({with_genres, page:page} ))}>Filter</button>*/}
                <button className={'filter_button'} type={'button'} onClick={() =>  foo()}>Filter</button>

            </div>


                <MoviesList/>

                <MoviePagination/>
            </div>
        );
    }



export {MoviesPage};
