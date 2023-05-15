import {IRes} from "../types";
import {IPagination} from "../interfaces";
import {IMovie} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class MovieService {
    getAll(page=1):IRes<IPagination<IMovie[]>> {
return axiosService.get(urls.movies.movies, {params:{page}})
};

getById (id:string):IRes<IMovie> {
     return axiosService.get(urls.movies.byId(id))
    }


}



export const movieService = new MovieService()