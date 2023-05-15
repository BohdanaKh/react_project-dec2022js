import {FC} from 'react';

import {IMovie} from "../interfaces";

interface IProps {
movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {title, overview, vote_average, poster_path} = movie;


    return (
        <div>
          <div>{title}</div>
          <div>{vote_average}</div>
          <div>{overview}</div>
          <div>{poster_path}</div>
        </div>
    );
};

export {MoviesListCard};

