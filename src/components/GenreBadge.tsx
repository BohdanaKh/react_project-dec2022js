import React, {FC} from 'react';

import {useAppDispatch} from "../hooks";
import {movieActions} from "../redux";
import {IGenre} from "../interfaces";



interface IProps {
    genre:IGenre,

}


const GenreBadge: FC<IProps>= ({genre}) => {


    const {id,name} = genre;
    const dispatch = useAppDispatch();
    // const genresArray = [];


    return (
        <div>
{/*<button type={'button'} className={'genre_button'} onClick={() =>genresArray.push(id)}>{name}</button>*/}
<button type={'button'} className={'genre_button'} onClick={() =>dispatch(movieActions.setGenreId(id))}>{name}</button>

        </div>
    );
};

export {GenreBadge};
