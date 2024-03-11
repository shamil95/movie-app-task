import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Description = {
    '#TITLE': string;
    '#YEAR': number;
    '#IMDB_ID': string;
    '#RANK': number;
    '#ACTORS': string;
    '#AKA': string;
    '#IMDB_URL': string;
    '#IMDB_IV': string;
    '#IMG_POSTER': string;
    photo_width: number;
    photo_height: number;
};

type GetMoviesResponse = {
    ok: boolean;
    description: Description[];
    error_code: number;
};

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://search.imdbot.workers.dev/' }),
    endpoints: builder => ({
        getMovies: builder.query<GetMoviesResponse, string>({
            query: params => `?q=${params}`,
        }),
        getMovie: builder.query<any, string>({
            query: params => `?tt=${params}`,
        }),
    }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi;
