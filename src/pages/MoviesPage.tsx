import React, {FC, useEffect} from "react";

import {GenreBadge, MoviePagination, MoviesList} from "../components";
import {Outlet, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {genreActions, movieActions} from "../redux";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieService} from "../services";
import {IRes} from "../types";
import {IMovie} from "../interfaces";



const MoviesPage:FC = () => {

    // const {genres} = useAppSelector(state => state.genreReducer);
    // const dispatch = useAppDispatch();
    //
    // useEffect(() => {
    //     dispatch(genreActions.getAll())
    // },[])



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

        return (
            <div className={'container'}>
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
