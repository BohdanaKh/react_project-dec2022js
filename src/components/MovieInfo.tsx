import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

import {GenreBadge} from "./GenreBadge";
import {movieService} from "../services";
import {IMovie} from "../interfaces";
import welcome from '../images/welcome.png';
import {genreActions, movieActions} from "../redux";
import {useAppDispatch} from "../hooks";


const MovieInfo: FC = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState<IMovie>({
        adult: false,
        backdrop_path: "",
        genres: [],
        homepage: "",
        id: "",
        imdb_id: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        runtime: 0,
        status: "",
        tagline: "",
        title: "",
        vote_average: 0
    });
    // const {title, genres, adult, vote_average, overview, release_date, runtime} = useAppSelector(state => state.movieReducer.movie);
    const {title, poster_path,genres, adult, vote_average, overview, release_date, runtime} = movie;
    //
    const dispatch = useAppDispatch();
    console.log(id);


    useEffect(() => {
        movieService.getById(id).then(value => value.data).then(value => setMovie(value))
    }, [id])

    //


    // useEffect( () => {
    //      dispatch(movieActions.getById({id}))
    // }, [id])



    // const posterPath = movie.poster_path;
    return (
        // <div className="movie-section">
        //     {Object.keys(movie).length === 0 ? (
        //         <div>...Loading</div>
        //     ) : (
        // <div>
        //     { movie ?
                <div className={'movieInfo'}>

                    <img width={400} height={500} src={{poster_path}? `https://image.tmdb.org/t/p/w500${poster_path}` : welcome} alt={movie.title}/>

                    <div className={'movie_about'}>
                <h3 className={'movie_title'}>{title}</h3>

                <Link to={'/'}>
                        {
                            genres.map((genre) => <button type={'button'} key={genre.id} className={'genre_button'} onClick={() =>dispatch(movieActions.getMovieByGenre({with_genres:genre.id.toString(),page:1}))}>{genre.name}</button>)
                        }
                </Link>

                <div className={'star-rating'}>
            {[...Array(10)].map((star,index) => {
                index+=0.5;
                return(
                <span key={index} className={index<=vote_average? 'on' : 'off'}>
                <span className='star'>&#9733;</span>
                </span>
                );
            })}
            {vote_average}
                </div>
<h2  style={{color:'red',fontSize:46}} >{adult? 'For adults' : ''}</h2>
                <div>Release date: {release_date}</div>
                <div>Runtime: {runtime} min.</div>
                <div className={'movie_overview'}>{overview}</div>
                    </div>
                </div>

        //     )}
        // </div>
    );
};

export {MovieInfo};
