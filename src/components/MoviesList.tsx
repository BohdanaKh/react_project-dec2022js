import React, {FC,useEffect,useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import { movieActions} from "../redux";
import {MoviesListCard} from "./MoviesListCard";
import background from "../images/background.jpg";



const MoviesList: FC = () => {
    const {movies,searchValue,page, selectedGenres, query} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    // const [query, setQuery] = useState(null);
    const [URLSearchParams,setURLSearchParams] = useSearchParams();
    console.log(URLSearchParams);


    //
    useEffect(() => {
        setURLSearchParams(prev => ({...prev, page: page}))
    }, [page])
    // console.log(movies);

    // useEffect(() => {
    //
    //     dispatch(movieActions.getAll(+query.get('page')))
    // },[query])

    useEffect(() => {
       if (!query) {
        dispatch(movieActions.getAll(page))}
    },[dispatch,page,query])





    // useEffect(() => {
    // if(selectedGenres){
    //         dispatch(movieActions.getMovieByGenre({with_genres:selectedGenres.toString(), page:+query.get('page')}))}
    // }, [selectedGenres,query, dispatch])


 // useEffect(() => {
 //        if(searchValue){
 //            // setQuery(prev => ({ ...prev,query:searchValue, page:+query.get('page')}))
 //            // dispatch(movieActions.searchByValue({query:searchValue, page:+query.get('page')}))}
 //    }, [searchValue,query, dispatch])
 //
     useEffect(() => {
        if(searchValue){
            // setQuery(prev => ({ ...prev,query:searchValue, page:+query.get('page')}))

           dispatch(movieActions.setQuery(searchValue));
            dispatch(movieActions.searchByValue({query:searchValue, page:page}))}
    }, [searchValue,page, dispatch])


    useEffect(() => {
    if(selectedGenres.length > 0){
        dispatch(movieActions.setQuery(selectedGenres))
            dispatch(movieActions.getMovieByGenre({with_genres:selectedGenres.toString(), page:page}))}
    }, [page, dispatch])


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
