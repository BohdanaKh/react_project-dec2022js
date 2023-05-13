const baseURL = 'https://api.themoviedb.org/3'

const auth = '/authentication';
const movies = '/discover/movie';

const genres = '/genre/movie/list';

const urls = {
    auth:{
        auth
    },
    movies:{
        movies
    },
    genres:{
        genres
    }
}


export {
    baseURL,
    urls
}

