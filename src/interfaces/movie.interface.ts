import {IGenre} from "./genre.interface";

export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genres: IGenre[],
    homepage: string,
    id: string,
    imdb_id: string,
    overview:  string,
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number,
    status:string,
    tagline:string,
    title: string,
    vote_average: number,

}
