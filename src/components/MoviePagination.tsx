import {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";



const MoviePagination: FC = () => {
    const {page,totalPages} = useAppSelector(state => state.movieReducer);
// const dispatch = useAppDispatch();
const [,setQuery] = useSearchParams();

const prev = () => {
  setQuery(prev1 => ({...prev1,page:+prev1.get('page')-1}))
}

    const next = () => {
        setQuery(prev1 => ({...prev1,page:+prev1.get('page')+1}))
    }

    //
    // const prev = () => {
    //     dispatch(movieActions.setPage(page-1))
    // }
    //
    // const next = () => {
    //     dispatch(movieActions.setPage(page+1))
    // }




    return (
        <div className={'pagination'}>
            <button disabled={(page===1)} onClick={prev}><span>&#9756;</span></button>
            <button disabled={(page===totalPages)} onClick={next}><span>&#9758;</span></button>
        </div>
    );
};

export {MoviePagination};
