import {FC} from 'react';

import {IMovie} from "../interfaces";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    // const navigate = useNavigate();
    const {id, title, overview, vote_average} = movie;



    return (
        <div>

            <Link to={`${id}`}>
                <div>{title}</div>
                <div>{vote_average}</div>
                <div>{overview}</div>
                <hr/>
            </Link>

          {/*<div>{title}</div>*/}
          {/*<div>{vote_average}</div>*/}
          {/*<div>{overview}</div>*/}
          {/*<button onClick={()=>navigate(`${id}`, {state:{...movie}})}>Watch</button>*/}
          {/*  <hr/>*/}

        </div>

    );
};

export {MoviesListCard};

