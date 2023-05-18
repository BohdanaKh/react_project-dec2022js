const baseURL = 'https://api.themoviedb.org/3';
const posterBaseURL = 'https://image.tmdb.org/t/p/w500';

// https://api.themoviedb.org/3/find/638974

const auth = '/authentication';
const movies = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';
const searchMovie = '/search/keyword';

const urls = {
    auth:{
        auth
    },
    movies:{
        movies,
        byGenreId: (genre_id:number):string => `${movies}/${genre_id}`
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

