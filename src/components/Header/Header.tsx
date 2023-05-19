import {FC, useEffect} from 'react';
import {Link, useSearchParams} from "react-router-dom";

import css from './Header.module.css'
import {SwitchTheme} from "../SwitchTheme";
import image from '../../../src/images/image.png';
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {UserInfo} from "../UserInfo";



const Header: FC = () => {

    // const {reset, handleSubmit, register, setValue} = useForm<string>();
    // const navigate = useNavigate();
    // const {movie,searchMovie} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query,setQuery] = useSearchParams({page:'1'});

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

    // useEffect(() => {
    //     if (searchMovie) {
    //         setValue('title', movie.title)
    //     }
    // }, [searchMovie, setValue])

    const find = async (e:any) => {
        e.preventDefault();
        const text = e.target.text.value;
        // const data = await movieService.searchByValue(text);
        // console.log(data);
        // dispatch(movieActions.setSearchMovie( data))
        await dispatch(movieActions.searchByValue(text))
    }

    return (
        <div className={css.Header}>
            <Link to={'/'}>
            <div className={'logo'}>MOVIES</div>
            </Link>

            <div className={'searchBar'}>
                <form onSubmit={find}>
                    <input type="text" placeholder={'search movie'} name={'text'}/>
                    <button  type="submit" className={'search-button'}>&#128269; </button>
                </form>
                {/*<form onSubmit={find}>*/}
                    {/*<input type="text" value={searchValue} placeholder={'search movie'} name={'movie'} onChange={(e) =>setSearchValue(e.target.value)}/>*/}
                {/*    <input type="text" placeholder={'search movie'} name={'title'}/>*/}
                {/*    <button  type="submit" className={'search-button'}>&#128269; </button>*/}

                {/*</form>*/}
            </div>

            <SwitchTheme/>

<UserInfo/>

            <div className={'user-image'}>
                <img src={image} alt="user"/>
            </div>

        </div>
    );
};

export {Header};