import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MoviesState = {
    searchValue: string;
};

const initialState: MoviesState = {
    searchValue: 'seven',
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        changeSearchKeyword: (state, { payload }: PayloadAction<string>) => {
            state.searchValue = payload;
        },
    },
});

export const moviesActions = moviesSlice.actions;

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
