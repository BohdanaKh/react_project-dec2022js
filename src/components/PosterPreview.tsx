import {FC, useEffect, useState} from 'react';
import {posterBaseURL} from "../constants";
import empty from "../images/empty.jpg";
import {useAppSelector} from "../hooks";
import {useParams} from "react-router-dom";
import {movieActions} from "../redux";
import {movieService} from "../services";

interface IProps {

}

const PosterPreview: FC<IProps> = () => {
    const {movie} = useAppSelector(state => state.movieReducer);
    const {id} = useParams();


    useEffect(() => {
        if (id) {
         movieActions.getById({id})
        }
    },[id])

    const posterPath = movie.poster_path;
    return (
        <div>
            <img src={{posterPath}? 'https://image.tmdb.org/t/p/w500'+`${movie.poster_path}` : empty} alt={movie.title}/>
        </div>
    );
};

export {PosterPreview};
