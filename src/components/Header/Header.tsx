import {FC} from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css'
import {SwitchTheme} from "../SwitchTheme";
import {useAppDispatch} from "../../hooks";
import {UserInfo} from "../UserInfo";
import banner from '../../images/banner.jpg';
import {SubmitHandler} from "react-hook-form";
import {movieActions} from "../../redux";





const Header: FC = () => {

    const dispatch = useAppDispatch();


    const find:SubmitHandler<any> = (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        dispatch(movieActions.setSearchValue(text));
        document.forms[0].reset();
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