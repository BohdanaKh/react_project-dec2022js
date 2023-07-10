import React, {FC, useEffect} from "react";

import {GenreBadge, MoviePagination, MoviesList} from "../components";
import {genreActions, movieActions} from "../redux";
import {useAppDispatch, useAppSelector} from "../hooks";




const MoviesPage:FC = () => {

    let {genres,selectedGenres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();


    //
    useEffect(() => {
        dispatch(genreActions.getAll())
    },[dispatch])


    const with_genres:string = selectedGenres.join(',');
    console.log(with_genres);



    return (
        <div className={'page'}>

            <div className={'genres_wrap'}>

                    {genres.map((genre) => (<GenreBadge key={genre.id} genre={genre}/>))}
                <button className={'filter_button'} type={'button'} onClick={() =>  dispatch(movieActions.getMovieByGenre({with_genres,page:1}))}>Filter</button>

            </div>


                <MoviesList/>

                <MoviePagination/>
            </div>
        );
    }



export {MoviesPage};
