import {FC} from 'react';


import {IMovie} from "../interfaces";

interface IProps {
    movie: IMovie
}

const MovieInfo: FC<IProps> = ({movie}) => {


    return (
        <div>
           <div>{movie.title}</div>
            <div className={'star-rating'}>
                {[...Array(10)].map((star,index) => {
                    index+=0.5;
                    return(
                        <span key={index} className={index<=movie.vote_average? 'on' : 'off'}>
                        <span className='star'>&#9733;</span>
                        </span>
                    );
                })}
                {movie.vote_average}
            </div>
            <div>{movie.genre_ids}</div>
           <div>{movie.release_date}</div>
          <div>{movie.adult}</div>
            <div>{movie.overview}</div>
        </div>
    );
};

export {MovieInfo};
