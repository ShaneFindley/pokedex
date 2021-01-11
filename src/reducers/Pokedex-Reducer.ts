import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { IEnrichedDetail } from '../types/Pokemon';

export interface IPokedexSlice {
    filter: string | null;
    options: IEnrichedDetail[];
    selected: IEnrichedDetail | null;
}

export const pokedexSlice = createSlice<IPokedexSlice, SliceCaseReducers<IPokedexSlice>, string>({
    name: 'pokedex',
    initialState: {
        filter: null,
        options: [],
        selected: null
    },
    reducers: {
        clear: (state: IPokedexSlice) => {
            state.selected = null;
            state.options = [];
        },
        select: (state: IPokedexSlice, action: PayloadAction<IEnrichedDetail>) => {
            state.selected = action.payload;
        },
        setPokemon: (state: IPokedexSlice, action: PayloadAction<IEnrichedDetail[]>) => {
            state.options = action.payload;
        },
        setFilter: (state: IPokedexSlice, action: PayloadAction<string>) => {
            state.filter = action.payload;
        }
    }
});

export const { clear, select, setPokemon, setFilter } = pokedexSlice.actions;

export const pokedexReducer = pokedexSlice.reducer;