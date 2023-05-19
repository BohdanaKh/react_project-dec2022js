import React, {FC, useEffect} from 'react';
import { useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {genreActions, movieActions} from "../redux";
import {MoviesListCard} from "./MoviesListCard";
import {GenreBadge} from "./GenreBadge";


const MoviesList: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query,setQuery] = useSearchParams({page:'1'});
    // const params = useParams();
    // const [movieByGenre, setMovieByGenre] = useState([]);
    // const [, setPage] = useState(null)
    console.log(movies);

    // const {genres} = useAppSelector(state => state.genreReducer);
    //
    // useEffect(() => {
    //     dispatch(genreActions.getAll())
    // },[])



    useEffect(() => {
        dispatch(movieActions.getAll(+query.get('page')))
    }, [dispatch,query])


    // useEffect(() => {
    //     dispatch(movieActions.setSearchMovie(data))
    // },[dispatch])

    // useEffect(() => {
    //     movieService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(movieActions.setMovies(value)))
    // }, [dispatch,query])




    return (
        <div>

        {/*<div className={'genres_wrap'}>*/}
        {/*    {genres.map((genre) => (<GenreBadge key={genre.id} genre={genre}/>))}*/}
        {/*</div>*/}


<div className={'movie_list_container'}>
            {
                movies &&
                movies.map(movie => <MoviesListCard key={movie.id}  movie={movie}/>)
            }


         </div>

        </div>
    )
};

export {MoviesList};
