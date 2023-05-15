import {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";

import {MovieInfo} from "../components";
import {movieActions} from "../redux";



const MovieDetailsPage: FC = () => {
const {id} = useParams();
    const {movie} = useAppSelector(state =>state.movieReducer);
const dispatch = useAppDispatch();


    useEffect(() => {
        // if (!state) {
            dispatch(movieActions.getById({id}))
        // }
    },[dispatch,id])



    return (
        <div>
            {
                movie &&
                <MovieInfo movie={movie}/>
            }
        </div>
    );
};

export {MovieDetailsPage};
