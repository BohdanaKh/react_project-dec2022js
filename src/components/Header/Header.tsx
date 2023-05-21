import {FC, useEffect} from 'react';
import {Link, useSearchParams} from "react-router-dom";

import css from './Header.module.css'
import {SwitchTheme} from "../SwitchTheme";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {UserInfo} from "../UserInfo";
import banner from '../../images/banner.jpg';
import {SubmitHandler, useForm} from "react-hook-form";
import {text} from "stream/consumers";



const Header: FC = () => {

    // @ts-ignore
    const {handleSubmit,reset,register} = useForm<string>();
    // const navigate = useNavigate();
    // const {movie,searchMovie} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    // const [,setQuery] = useSearchParams({page:'1'});

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

    // const find:SubmitHandler<string> = async (query,page) => {
        // e.preventDefault();
        // const text = e.target.text.value;
        // const data = await movieService.searchByValue(text);
        // console.log(data);
        // dispatch(movieActions.setSearchMovie( data))
        // @ts-ignore
    //     await dispatch(movieActions.searchByValue({text,page:1}))
    //     reset()
    // }
    const find:SubmitHandler<string> = async (t,page) => {

        await dispatch(movieActions.searchByValue({query:t.valueOf(),page:1}))
        reset()
    }

    return (
        <div className={css.Header} style= {{ backgroundImage:`url(${banner})`,height:500, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>

            <div>

            {/*<div style={{backgroundImage:banner, height:100}}> </div>*/}
            <UserInfo/>
            <SwitchTheme/>

            </div>

            <Link to={'/'}>
            <h2 className={'logo'}>TMDB</h2>
            </Link>


            <div className={'searchBar'}>
                {/*<form onSubmit={find}>*/}
                {/*    <input type="text" placeholder={'search movie'} name={'text'}/>*/}
                {/*    <button  type="submit" className={'search-button'}>&#128269; </button>*/}
                {/*</form>*/}



                <form onSubmit={handleSubmit(find)}>
                    <input type="text" placeholder={'search movie'} {...register('t')}/>
                    <button  type="submit" className={'search-button'}>&#128269; </button>

                </form>
            </div>





            {/*<div className={'user-image'}>*/}
            {/*    <img src={image} alt="user"/>*/}
            {/*</div>*/}

        </div>
    );
};

export {Header};