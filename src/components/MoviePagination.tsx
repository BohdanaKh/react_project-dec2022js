import {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppSelector} from "../hooks";



const MoviePagination: FC = () => {
    const {page,totalPages} = useAppSelector(state => state.movieReducer);

const [,setQuery] = useSearchParams();

const prev = () => {
  setQuery(prev1 => ({...prev1,page:+prev1.get('page')-1}))
}

    const next = () => {
        setQuery(prev1 => ({...prev1,page:+prev1.get('page')+1}))
    }


    return (
        <div>
            <button disabled={(page===1)} onClick={prev}>prev</button>
            <button disabled={(page===totalPages)} onClick={next}>next</button>
        </div>
    );
};

export {MoviePagination};
