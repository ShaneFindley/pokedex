import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { IPokemon } from '../types/Pokemon';

export interface IPokemonSlice {
    pokemon: IPokemon | null;
    cache: IPokemon[];
}

export const pokemonSlice = createSlice<IPokemonSlice, SliceCaseReducers<IPokemonSlice>, string>({
    name: 'pokemon',
    initialState: {
        pokemon: null,
        cache: []
    },
    reducers: {
        clear: (state: IPokemonSlice) => {
            state.pokemon = null;
            state.cache = [];
        },
        select: (state: IPokemonSlice, action: PayloadAction<{ pokemon: IPokemon, cache: IPokemon[]}>) => {
            state.cache = action.payload.cache;
            state.pokemon = action.payload.pokemon
        }
    }
});

export const { clear, select } = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;