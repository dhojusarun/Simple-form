import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BEARER_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            if (BEARER_TOKEN) {
                headers.set('Authorization', `Bearer ${BEARER_TOKEN}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTrendingMovies: builder.query<any, void>({
            query: () => 'trending/all/day?language=en-US',
        }),
        getPopularMovies: builder.query<any, void>({
            query: () => 'movie/popular?language=en-US&page=1',
        }),
        getUpcomingMovies: builder.query<any, void>({
            query: () => 'movie/upcoming?language=en-US&page=1',
        }),
        getMovieDetails: builder.query<any, string>({
            async queryFn(id, _queryApi, _extraOptions, baseQuery) {
                // Try fetching as a movie first
                const movieResult = await baseQuery(`movie/${id}?language=en-US`);
                if (!movieResult.error) {
                    return { data: movieResult.data };
                }
                // If movie fails, try fetching as a TV show
                const tvResult = await baseQuery(`tv/${id}?language=en-US`);
                if (!tvResult.error) {
                    return { data: tvResult.data };
                }
                return { error: movieResult.error || tvResult.error };
            },
        }),
        searchMovies: builder.query<any, string>({
            query: (query) => `search/multi?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
        }),
    }),
});

export const {
    useGetTrendingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetMovieDetailsQuery,
    useSearchMoviesQuery,
} = tmdbApi;
