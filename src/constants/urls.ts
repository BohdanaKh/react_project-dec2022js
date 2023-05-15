const baseURL = 'https://api.themoviedb.org/3'

// https://api.themoviedb.org/3/find/638974

const auth = '/authentication';
const movies = '/discover/movie';
const findMovie = '/movie';

const genres = '/genre/movie/list';

const urls = {
    auth:{
        auth
    },
    movies:{
        movies,
        byId: (id:string):string => `${findMovie}/${id}`
    },
    genres:{
        genres
    }
}


export {
    baseURL,
    urls
}

