import React, {FC, useEffect, useState} from "react";

import {GenreBadge, MoviePagination, MoviesList} from "../components";
import {Outlet, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {genreActions, movieActions} from "../redux";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieService} from "../services";
import {IRes} from "../types";
import {IMovie} from "../interfaces";



const MoviesPage:FC = () => {

    let {genres,selectedGenres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();


    //
    useEffect(() => {
        dispatch(genreActions.getAll())
    },[])

    console.log(genres);

    // const searchValue = useSearchParams();
// const dispatch = useAppDispatch();

    // console.log(searchValue);

    // useEffect(() => {
            //

            // @ts-ignore
        //     const text = "The";
        //     const fetchMovies = async () => {
        //         const response = await movieService.searchByValue(searchValue);
        //         console.log(response);
        //     };
        //     fetchMovies();
        // }, [searchValue])
    const with_genres:string = selectedGenres.join(',');
    console.log(with_genres);


    return (
        <div className={'page'}>
            {/*// <div className={darkMode?'App-light':'App-dark'}>*/}

            <div className={'genres_wrap'}>
                    {genres.map((genre) => (<GenreBadge key={genre.id} genre={genre}/>))}
                <button className={'filter_button'} type={'button'} onClick={() =>  dispatch(movieActions.getMovieByGenre({with_genres,page:1}))}>Filter</button>

            </div>

                {/*<div className={'genres_wrap'}>*/}


                {/*{*/}
                {/*    genres.map((genre) => (*/}
                {/*        <GenreBadge key={genre.id} genre={genre}/>*/}

                {/*        )*/}
                {/*    )*/}
                {/*}*/}
                {/*</div>*/}
                <MoviesList/>
                <MoviePagination/>
            </div>
        );
    }



export {MoviesPage};
