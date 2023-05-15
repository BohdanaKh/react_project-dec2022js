import {IRes} from "../types";
import {IGenre} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class GenresService {
    getAll(): IRes<IGenre[]> {
        return axiosService.get(urls.genres.genres)
    }
}


export const genresService = new GenresService();