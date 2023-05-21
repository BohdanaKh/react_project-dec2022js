import {FC} from 'react';
import {Link} from "react-router-dom";
import {SubmitHandler} from "react-hook-form";

import css from './Header.module.css'
import {SwitchTheme} from "../SwitchTheme";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {UserInfo} from "../UserInfo";
import banner from '../../images/banner.jpg';




const Header: FC = () => {

    const dispatch = useAppDispatch();


    const find:SubmitHandler<any> = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        dispatch(movieActions.setSearchValue(text));

    }



    return (
        <div className={css.Header} style= {{ backgroundImage:`url(${banner})`,height:500, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
            <div>

            <UserInfo/>

            <SwitchTheme/>

            </div>

            <Link to={'/'}>
            <h2 className={'logo'}>TMDB</h2>
            </Link>


            <div className={'searchBar'}>

                <form onSubmit={find}>
                    <input type="text" placeholder={'search movie'} name={'text'}/>
                    <button  type="submit" className={'search-button'}>&#128269; </button>
                </form>

            </div>
        </div>
    );
};

export {Header};