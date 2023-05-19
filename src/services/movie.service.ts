import {IRes} from "../types";
import {IPagination} from "../interfaces";
import {IMovie} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class MovieService {
    getAll(page:number):IRes<IPagination<IMovie[]>> {
return axiosService.get(urls.movies.movies, {params:{page}})
};

getById (id:string):IRes<IMovie> {
     return axiosService.get(urls.movie.byId(id))
    };

    getByGenre(page: number, genre_id: string):IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies.movies, {params: { page,
                with_genres: genre_id}})
    }

searchByValue (page: number,text:string):IRes<IPagination<IMovie[]>> {
    return axiosService.get(urls.searchMovie.searchMovie,{params:{page,query:text}})
}

}



export const movieService = new MovieService()