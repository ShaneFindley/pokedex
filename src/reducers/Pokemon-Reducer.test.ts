import { IPokemon } from "../types/Pokemon";
import { clear, pokemonReducer, select } from "./Pokemon-Reducer";

describe('Pokemon-Reducer', () => {
    it('should return a default state when handling a clear action.', () => {
        expect(pokemonReducer({
            cache: [],
            pokemon: null
        }, clear)).toEqual({
            pokemon: null,
            cache: []
        });
    });

    it('should set the pokemon when handling a select action.', () => {
        const pokemon: IPokemon = {
            id: 1,
            name: 'grumpy'
        } as IPokemon;

        expect(pokemonReducer({
            cache: [],
            pokemon: null
        }, select({ pokemon, cache: [pokemon] }))).toEqual({
            pokemon: pokemon,
            cache: [pokemon]
        });
    });
});