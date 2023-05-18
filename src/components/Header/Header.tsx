import {FC, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {SwitchTheme} from "../SwitchTheme";
import image from '../../../src/images/image.png';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {SubmitHandler} from "react-hook-form";
import {movieService} from "../../services";



const Header: FC = () => {
    const navigate = useNavigate();
    const {searchValue} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     movieService.searchByValue(searchValue).then(value => value.data).then(value => dispatch(movieActions.searchByValue(value)))
    // },[searchValue,dispatch])
    // const find:SubmitHandler<any> = (e:any) => {
    //     e.preventDefault();
    //     const text = e.target.movie.value;
    //     const searchValue = {text}
       //  movieService.searchByValue(searchValue)
       // // @ts-ignore
       //  dispatch(movieActions.searchByValue(searchValue));
    // }

    const find:SubmitHandler<any> = async (searchValue) => {
        const {data} = await movieService.searchByValue(searchValue);
        dispatch(movieActions.searchByValue({searchValue: data}))
    }

    return (
        <div className={css.Header}>
            <Link to={'/'}>
            <div className={'logo'}>MOVIES</div>
            </Link>

            <div className={'searchBar'}>
                <form onSubmit={find}>
                    {/*<input type="text" value={searchValue} placeholder={'search movie'} name={'movie'} onChange={(e) =>setSearchValue(e.target.value)}/>*/}
                    <input type="text" placeholder={'search movie'} name={'movie'}/>
                    <button  type="submit" className={'search-button'}>&#128269; </button>

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