import React, {FC, useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {genreActions, movieActions} from "../redux";
import {SubmitHandler} from "react-hook-form";
import {IGenre, IMovie} from "../interfaces";
import {movieService} from "../services";

interface IProps {
    genre:IGenre,

}


const GenreBadge: FC<IProps>= ({genre}) => {
    // const {genre} = useAppSelector(state => state.genreReducer);
    // const {movieByGenre} = useAppSelector(state => state.movieReducer);

    const {id,name} = genre;
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();


    // useEffect(() => {
    //     dispatch(genreActions.getAll())
    // },[])

    // const  handleGenreClick = (id: number) => {
    //
    // }


    return (
        <div>
        {/*// <div className={'genres_wrap'}>*/}
        {/*//     {*/}
        {/*//         genres.map((genre) => (*/}
        {/*//             <div key={genre.id}>*/}
                        <input
                            type="checkbox"
                            // checked={}
                            onChange={() => {}}
                        />
                       <button type={'button'} className={'genre_button'} onClick={() => dispatch(movieActions.getMovieByGenre(id))
                       }>{name}
                    </button>
            {/*        </div>)*/}
            {/*    )*/}
            {/*}*/}

            {/*<Outlet/>*/}
        </div>
    );
};

export {GenreBadge};
