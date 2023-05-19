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

    // const {movies} = useAppSelector(state => state.movieReducer);
    // const {id} = useParams();
    //
    //
    // useEffect(() => {
    //     if (id) {
    //      movieActions.getById({id})
    //     }
    // },[id])
    //
    // const posterPath = poster_path;
    return (
        <div>
          {/*<img width={200} height={300} src={{posterPath}? 'https://image.tmdb.org/t/p/w500'+`${poster_path}` : empty} alt={title}/>*/}
         </div>
    );
};

export {PosterPreview};
