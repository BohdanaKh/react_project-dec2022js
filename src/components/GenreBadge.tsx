import React, {FC, useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {genreActions} from "../redux";




const GenreBadge: FC= () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(genreActions.getAll())
    },[dispatch])

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
                       <button type={'button'} className={'genre_button'} onClick={()=>navigate(`${genre.id}`)}>{genre.name}
                    </button>
                    </div>)
                )
            }

            <Outlet/>
        </div>
    );
};

export {GenreBadge};
