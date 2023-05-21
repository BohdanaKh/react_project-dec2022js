import {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";



const MoviePagination: FC = () => {
    let {page,totalPages} = useAppSelector(state => state.movieReducer);
const dispatch = useAppDispatch();
const [,setQuery] = useSearchParams();


    const prev = () => {
        setQuery(prev1 => ({...prev1,page:+prev1.get('page')-1}))
     dispatch(movieActions.setPage(page-1))
    }

    const next = () => {
        setQuery(prev1 => ({...prev1,page:+prev1.get('page')+1}))
     dispatch(movieActions.setPage(page+1))
    }




    return (
        <div className={'pagination'}>
            <button disabled={(page===1)} onClick={prev}>&#10094;&#10094;</button>
            <div style={{fontSize:16,marginLeft:10,marginRight:10}}>{page}/{totalPages}</div>
            <button disabled={(page===totalPages)} onClick={next}>&#10095;&#10095;</button>
        </div>
    );
};

export {MoviePagination};
