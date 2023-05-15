import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../hooks";
import {genreActions} from "../redux";




const GenreBadge: FC= () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    },[dispatch])

    console.log(genres);

    return (
        <div>
            {
                genres.map((genre) => (
                    <div key={genre.id}>
                        <input
                            type="checkbox"
                            // checked={}
                            onChange={() => {}}
                        />
                        {genre.name}
                    </div>)
                )
            }
        </div>
    );
};

export {GenreBadge};
