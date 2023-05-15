import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import css from './Header.module.css'



const Header: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <div>MOVIES</div>

            <button onClick={() => navigate('movies')}>Movies</button>
            <button onClick={() => navigate('genres')}>Genres</button>

        </div>
    );
};

export {Header};