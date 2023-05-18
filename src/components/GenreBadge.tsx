import React, {FC, useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {genreActions, movieActions} from "../redux";
import {SubmitHandler} from "react-hook-form";
import {IGenre, IMovie} from "../interfaces";
import {movieService} from "../services";




const GenreBadge: FC= () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const {movieByGenre} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(genreActions.getAll())
    },[])

    console.log(genres);



    // const  handleGenreClick = (id: number) => {
    //
    // }

    return (
        <div className={'genres_wrap'}>
            {
                genres.map((genre) => (
                    <div key={genre.id}>
                        <input
                            type="checkbox"
                            // checked={}
                            onChange={() => {}}
                        />
                       <button type={'button'} className={'genre_button'} onClick={() => dispatch(movieActions.getMovieByGenre(genre.id))
                       }>{genre.name}
                    </button>
                    </div>)
                )
            }

            <Outlet/>
        </div>
    );
};

export {GenreBadge};
