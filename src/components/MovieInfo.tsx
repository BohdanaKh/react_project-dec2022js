import {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {IMovie} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import {posterBaseURL} from "../constants";

// interface IProps {
//     movie: IMovie
// }

const MovieInfo: FC = () => {

    const {id} = useParams();
    const {movie} = useAppSelector(state =>state.movieReducer);
    const dispatch = useAppDispatch();
    console.log(id);

    useEffect(() => {
        if (id) {
        dispatch(movieActions.getById({id}))
        }
    },[dispatch,id])

    console.log(movie);


    return (
        <div>
            <img src={ posterBaseURL+`${movie.poster_path}`} alt={movie.title}/>
                <div>{movie.title}</div>
                <div className={'star-rating'}>
            {[...Array(10)].map((star,index) => {
                index+=0.5;
                return(
                <span key={index} className={index<=movie.vote_average? 'on' : 'off'}>
                <span className='star'>&#9733;</span>
                </span>
                );
            })}
            {movie.vote_average}
                </div>
                <div>{movie.genre_ids}</div>
                <div>{movie.release_date}</div>
                <div>{movie.adult}</div>
                <div>{movie.overview}</div>

        </div>
    );
};

export {MovieInfo};
