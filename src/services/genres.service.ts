import {IRes} from "../types";
import {IGenre, IGenres} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class GenresService {
    getAll(): IRes<IGenres<IGenre[]>> {
        return axiosService.get(urls.genres.genres)
    }
}


export const genresService = new GenresService();