import React, {FC,useEffect} from 'react';
import { useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import { movieActions} from "../redux";
import {MoviesListCard} from "./MoviesListCard";
import background from "../images/background.jpg";



const MoviesList: FC = () => {
    const {movies,page,searchValue} = useAppSelector(state => state.movieReducer);
    const {selectedGenres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const [,setQuery] = useSearchParams();


    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])


    useEffect(() => {
        dispatch(movieActions.getAll(page))
    },[dispatch])
    //
    useEffect(() => {
    if(selectedGenres){
            dispatch(movieActions.getMovieByGenre({with_genres:selectedGenres.toString(),page}))}
    }, [selectedGenres,dispatch,page])


 useEffect(() => {
        if(searchValue){
            dispatch(movieActions.searchByValue({query:searchValue,page}))}
    }, [searchValue,dispatch,page])


    // useEffect(() => {
    //     if(!searchValue && !selectedGenres)
    //     dispatch(movieActions.getAll(page))
    // },[dispatch,page])

    return (


            <div className={'movie_list_container'} style= {{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >
            {
                movies &&

                movies.map(movie => <MoviesListCard key={movie.id}  movie={movie}/>)
            }
            </div>
    )
};

export {MoviesList};
