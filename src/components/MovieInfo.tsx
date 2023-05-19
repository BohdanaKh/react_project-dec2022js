import {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import {posterBaseURL} from "../constants";
import empty from "../images/empty.jpg";
import {PosterPreview} from "./PosterPreview";

// interface IProps {
//     movie: IMovie
// }

const MovieInfo: FC = () => {

    const {id} = useParams();
    const {movie} = useAppSelector(state =>state.movieReducer);
    // const [movie,setMovie] = useState<IMovie>()
    const dispatch = useAppDispatch();
    console.log(id);

    useEffect(() => {
        if (id) {
        dispatch(movieActions.getById({id}))
        }
    },[id,dispatch])

    // useEffect(() => {
    //     movieService.getById(id).then(value => value.data).then(value => setMovie(value))
    // }, [id])


    console.log(movie);


    // const posterPath = movie.poster_path;
    return (
        <div>
            { movie && (
                <div>

                    {/*<img src={{posterPath}? 'https://image.tmdb.org/t/p/w500'+`${movie.poster_path}` : empty} alt={movie.title}/>*/}
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
                )}
{/*<PosterPreview/>*/}
        </div>
    );
};

export {MovieInfo};
