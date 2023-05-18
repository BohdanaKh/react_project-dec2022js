import {FC, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {SwitchTheme} from "../SwitchTheme";
import image from '../../../src/images/image.png';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {SubmitHandler, useForm} from "react-hook-form";
import {movieService} from "../../services";
import {IMovie} from "../../interfaces";



const Header: FC = () => {

    const {reset, handleSubmit, register, setValue} = useForm<IMovie>();
    const navigate = useNavigate();
    const {movie,searchMovie} = useAppSelector(state => state.movieReducer);
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

    useEffect(() => {
        if (searchMovie) {
            setValue('title', movie.title)
        }
    }, [searchMovie, setValue])

    const find:SubmitHandler<IMovie> = async () => {
        const {data} = await movieService.searchByValue(movie.title);
        dispatch(movieActions.setSearchMovie({searchValue: data}))
        // await dispatch(movieActions.searchByValue(searchMovie))
        reset()
    }

    return (
        <div className={css.Header}>
            <Link to={'/'}>
            <div className={'logo'}>MOVIES</div>
            </Link>

            <div className={'searchBar'}>
                <form onSubmit={handleSubmit(find)}>
                    <input type="text" placeholder={'search movie'} {...register('title')}/>
                    <button  type="submit" className={'search-button'}>&#128269; </button>
                </form>
                {/*<form onSubmit={find}>*/}
                    {/*<input type="text" value={searchValue} placeholder={'search movie'} name={'movie'} onChange={(e) =>setSearchValue(e.target.value)}/>*/}
                {/*    <input type="text" placeholder={'search movie'} name={'title'}/>*/}
                {/*    <button  type="submit" className={'search-button'}>&#128269; </button>*/}

                {/*</form>*/}
            </div>

            <SwitchTheme/>

            <div className={'user-image'}>
                <img src={image} alt="user"/>
            </div>

        </div>
    );
};

export {Header};