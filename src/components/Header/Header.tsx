import {FC, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {SwitchTheme} from "../SwitchTheme";
import image from '../../../src/images/image.png';



const Header: FC = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState(null);

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(searchValue);
    }

    return (
        <div className={css.Header}>
            <Link to={'/'}>
            <div className={'logo'}>MOVIES</div>
            </Link>

            <div className={'searchBar'}>
                <form onSubmit={submitHandler}>
                    <input type="text" value={searchValue} placeholder={'search movie'} name={'movie'} onChange={(e) =>setSearchValue(e.target.value)}/>
                    <button><i className={'search-button'}></i> </button>

                </form>
            </div>

            <button onClick={() => navigate('movies')}>Movies</button>
            <button onClick={() => navigate('genres')}>Genres</button>

            <SwitchTheme/>

            <div className={'user-image'}>
                <img src={image} alt="user"/>
            </div>

        </div>
    );
};

export {Header};