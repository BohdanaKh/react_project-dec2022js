import {IRes} from "../types";
import {IPagination} from "../interfaces/pagination.interface";
import {IMovie} from "../interfaces/movie.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class MovieService {
    getAll():IRes<IPagination<IMovie[]>> {
return axiosService.get(urls.movies.movies)
}


}



export const movieService = new MovieService()