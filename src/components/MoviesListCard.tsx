import {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../interfaces";
import empty from '../../src/images/empty.jpg';

interface IProps {
movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {


    // const navigate = useNavigate();
    const {id, title, vote_average, backdrop_path} = movie;


    // useEffect(() => {
    //     movieService.getById(genre_id).then(value => value.data).then(value => dispatch(movieActions.setMoviesByGenre(value)))
    // }, [genre_id])


    return (
        <div className={'movie_card'}>

            {/*{moviesByGenre &&(*/}

            <Link to={`/movie/${id}`}>
                <img className={'movie_image'} src={{backdrop_path}? `https://image.tmdb.org/t/p/w500${backdrop_path}` : empty} alt={title}/>
                <div>
                    <p style={{fontSize:18,fontWeight:'bolder'}}>{title}</p>
                    </div>
                <div className={'star-rating'}>
                    {[...Array(10)].map((star,index) => {
                        index+=0.5;
                        return(
                            <span key={index} className={index<=movie.vote_average? 'on' : 'off'}>
                <span className='star'>&#9733;</span>
                </span>
                        );
                    })}
                    {vote_average}
                </div>
            </Link>
            {/*)}*/}

          {/*<div>{title}</div>*/}
          {/*<div>{vote_average}</div>*/}
          {/*<div>{overview}</div>*/}
          {/*<button onClick={()=>navigate(`${id}`, {state:{...movie}})}>Watch</button>*/}
          {/*  <hr/>*/}

        </div>

    );
};

export {MoviesListCard};

