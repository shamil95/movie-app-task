import { configureStore } from '@reduxjs/toolkit';
import movies from './slices/movies';
import { movieApi } from '../queries/movies';

export const store = configureStore({
    reducer: {
        movies,
        [movieApi.reducerPath]: movieApi.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
