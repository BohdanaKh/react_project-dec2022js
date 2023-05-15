import {FC} from "react";

import {MoviePagination, MoviesList} from "../components";
import {Outlet} from "react-router-dom";



const MoviesPage:FC = () => {

    return (
        <div>
            <Outlet/>
            <MoviesList/>
            <MoviePagination/>
        </div>
    );
};

export {MoviesPage};
