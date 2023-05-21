const baseURL = 'https://api.themoviedb.org/3';
const posterBaseURL = 'https://image.tmdb.org/t/p/w500';


const movies = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';
const searchMovie = '/search/movie';

const urls = {

    movies:{
        movies,

    },
    movie:{
        byId: (id:string):string => `${movie}/${id}`
    },
    genres:{
        genres
    },
    searchMovie:{
        searchMovie
    }
}


export {
    baseURL,
    posterBaseURL,
    urls
}

