import { GenreDTO } from "./genre.dto";

export class MovieDTO{
    constructor (
        id: number,
        voteCount: number,
        video: boolean,
        voteAverage: number,
        title: string,
        popularity: number,
        posterPath: string,
        originalLanguage: string,
        originalTitle: string,
        genreIds: string[],
        backdropPath: string,
        adult: boolean,
        overview: string,
        releaseDate: string,
        genres: GenreDTO[])
    {}
}