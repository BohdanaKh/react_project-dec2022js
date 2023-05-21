const baseURL = 'https://api.themoviedb.org/3';
const posterBaseURL = 'https://image.tmdb.org/t/p/w500';

// https://api.themoviedb.org/3/find/638974

const auth = '/authentication';
const movies = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';
const searchMovie = '/search/movie';

const urls = {
    auth:{
        auth
    },
    movies:{
        movies,
        // getAll: (page:number):string => `${movies}?page=${page}`,
        byGenreId: (filtr:string):string => `${movies}/${filtr}`
    },
    movie:{
        byId: (id:string):string => `${movie}/${id}`
    },
    genres:{
        genres
    },
    searchMovie:{
        searchMovie
        // bySearchParam: (searchValue:string):string => `${searchMovie}
    }
}


export {
    baseURL,
    posterBaseURL,
    urls
}

