import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { IEnrichedDetail } from '../types/Pokemon';

export interface IMyPokemonSlice {
    items: number[];
    onlyMyPokemon: boolean;
}

export const myPokemonSlice = createSlice<IMyPokemonSlice, SliceCaseReducers<IMyPokemonSlice>, string>({
    name: 'my-pokemon',
    initialState: {
        items: [],
        onlyMyPokemon: false
    },
    reducers: {
        add: (state: IMyPokemonSlice, action: PayloadAction<IEnrichedDetail>) => {
            state.items.push(action.payload.id);
        },
        clear: (state: IMyPokemonSlice) => {
            state.items = [];
        },
        remove: (state: IMyPokemonSlice, action: PayloadAction<IEnrichedDetail>) => {
            const index = state.items.findIndex(o => o === action.payload.id);
            state.items.splice(index);
        },
        setOnlyMyPokemon: (state: IMyPokemonSlice, action: PayloadAction<boolean>) => {
            state.onlyMyPokemon = action.payload;
        }
    }
});

export const { add, clear, remove, setOnlyMyPokemon } = myPokemonSlice.actions;

export const myPokemonReducer = myPokemonSlice.reducer;