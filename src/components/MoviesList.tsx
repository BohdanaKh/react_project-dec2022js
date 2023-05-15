import {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import {MoviesListCard} from "./MoviesListCard";



const MoviesList: FC = () => {
    const {page,totalPages,movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [,setQuery] = useSearchParams();




    // useEffect(() => {
    //     setQuery(prev =>({...prev,page:'1'}) )
    // },[])

    useEffect(() => {
        dispatch(movieActions.getAll())
    },[dispatch])


    const prevPage = () => {
        setQuery(prev1 => ({...prev1,page:+prev1.get('page')-1}))
    }

    const nextPage = () => {
        setQuery(prev1 => ({...prev1,page:+prev1.get('page')+1}))
        console.log(page);
    }



    return (
        <div>
            {
                movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
            <button disabled={(page===1)} onClick={prevPage}>prev</button>
            <button disabled={(page===totalPages)} onClick={nextPage}>next</button>
        </div>
    );
};

export {MoviesList};
