export interface Omdb {
	Response: string,
	Search: Film[],
	totalResults: string,
	Error: string,
}

export interface Film {
	Title: string,
	Year: string,
	imdbID: string,
	Type: string,
	Poster: string,
}

export interface DetailFilm {
	Actors: string,
	Awards: string,
	BoxOffice: string,
	Country: string,
	DVD: string,
	Director: string,
	Genre: string,
	Language: string,
	Metascore: string,
	Plot: string,
	Poster: string,
	Production: string,
	Rated: string,
	Ratings: RatingFilm[],
	Released: string,
	Response: string,
	Runtime: string,
	Title: string,
	Type: string,
	Website: string,
	Writer: string,
	Year: string,
	imdbID: string,
	imdbRating: string,
	imdbVotes: string,
}

export interface RatingFilm {
	Source: string,
	Value: string,
}
