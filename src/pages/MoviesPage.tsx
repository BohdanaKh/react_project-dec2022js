import {FC, useEffect} from "react";

import {MoviePagination, MoviesList} from "../components";
import {Outlet, useParams, useSearchParams} from "react-router-dom";
import {movieActions} from "../redux";
import {useAppDispatch} from "../hooks";
import {movieService} from "../services";
import {IRes} from "../types";
import {IMovie} from "../interfaces";



const MoviesPage:FC = () => {

    const searchValue = useSearchParams();
// const dispatch = useAppDispatch();

    console.log(searchValue);

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
            <div>
                <div className={'banner'}>

                </div>
                <MoviesList/>
                <MoviePagination/>
            </div>
        );
    }



export {MoviesPage};
