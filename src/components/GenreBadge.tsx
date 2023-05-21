import React, {FC} from 'react';

import {useAppDispatch} from "../hooks";
import {genreActions} from "../redux";
import {IGenre} from "../interfaces";



interface IProps {
    genre:IGenre,

}


const GenreBadge: FC<IProps>= ({genre}) => {
    // const {genre} = useAppSelector(state => state.genreReducer);
    // const {movieByGenre} = useAppSelector(state => state.movieReducer);

    const {id,name} = genre;
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    // const [query,setQuery] = useSearchParams({page:'1'});

    return (
        <div>
<button type={'button'} className={'genre_button'} onClick={() =>dispatch(genreActions.setGenreId(id))}>{name}</button>
        </div>
    );
};

export {GenreBadge};
