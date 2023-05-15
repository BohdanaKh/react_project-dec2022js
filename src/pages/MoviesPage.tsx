import {FC} from "react";

import {MoviePagination, MoviesList} from "../components";



const MoviesPage:FC = () => {

    return (
        <div>
            <MoviesList/>
            <MoviePagination/>
        </div>
    );
};

export {MoviesPage};
