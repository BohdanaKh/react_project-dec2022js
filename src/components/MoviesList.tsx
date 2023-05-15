import {FC, useEffect} from 'react';
import {Link, Outlet, useLocation, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import {MoviesListCard} from "./MoviesListCard";
import {movieService} from "../services";



const MoviesList: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query,setQuery] = useSearchParams();

    console.log(query);


    useEffect(() => {
        setQuery(prev =>({...prev,page:'1'}) )
    },[])


    useEffect(() => {
        movieService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(movieActions.setMovies(value)))
    }, [query])


    // useEffect(() => {
    //     dispatch(movieActions.getAll())
    // },[dispatch])
    //

    // const prevPage = () => {
    //     setQuery(prev1 => ({...prev1,page:+prev1.get('page')-1}))
    // }
    //
    // const nextPage = () => {
    //     setQuery(prev1 => ({...prev1,page:+prev1.get('page')+1}))
    //     console.log(page);
    // }



    return (

        <div>

            {
                movies.map(movie => <MoviesListCard key={movie.id}  movie={movie}/>)
            }

            

        </div>


    );
};

export {MoviesList};
