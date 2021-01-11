import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { myPokemonReducer, IMyPokemonSlice } from "../reducers/MyPokemon-Reducer";
import { IPokedexSlice, pokedexReducer } from "../reducers/Pokedex-Reducer";
import { IPokemonSlice, pokemonReducer } from '../reducers/Pokemon-Reducer';

export interface IStores {
    myPokemon: IMyPokemonSlice;
    pokedex: IPokedexSlice;
    pokedexDetail: IPokemonSlice;
}

export const config = {
    key: 'root',
    storage: storage
}

const rootReducer = combineReducers({
    myPokemon: myPokemonReducer,
    pokedex: pokedexReducer,
    pokemon: pokemonReducer
});

const persistedReducer = persistReducer(config, rootReducer);

// Redux-Persist has an issue with the latest versions of React, 
// removing the middleware to improve performance.
export const store = configureStore({
    reducer: persistedReducer,
    middleware: [] 
});