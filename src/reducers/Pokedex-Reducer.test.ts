import { IEnrichedDetail } from "../types/Pokemon";
import { clear, pokedexReducer, select, setPokemon, setFilter } from "./Pokedex-Reducer";

describe('Pokedex-Reducer', () => {
    it('should return a default state when handling a clear action.', () => {
        expect(pokedexReducer({
            filter: null,
            options: [],
            selected: null
        }, clear)).toEqual({
            filter: null,
            options: [],
            selected: null
        });
    });

    it('should set the pokemon list when handling a setPokemon action.', () => {
        const pokemon: IEnrichedDetail[] = [
            { id: 1, name: 'grumpy', url: 'url' },
            { id: 2, name: 'happy', url: 'url' },
            { id: 3, name: 'sleepy', url: 'url' }
        ];

        const { filter, options, selected } = pokedexReducer({
            filter: null,
            options: [],
            selected: null
        }, setPokemon(pokemon));
        
        expect(filter).toBeNull();
        expect(selected).toBeNull();
        expect(options).not.toBeNull();
        expect(options.length).toEqual(3);
        expect(options).toEqual(pokemon);
    });

    it('should set the selected value when handling a select action.', () => {
        const pokemon: IEnrichedDetail = { id: 1, name: 'grumpy', url: 'url' };

        const { filter, options, selected } = pokedexReducer({
            filter: null,
            options: [],
            selected: null
        }, select(pokemon));
        
        expect(filter).toBeNull();
        expect(selected).not.toBeNull();
        expect(options).not.toBeNull();
        expect(options.length).toEqual(0);
    });

    it('should set the filter value when handling a setFilter action.', () => {
        const pokemon: IEnrichedDetail = { id: 1, name: 'grumpy', url: 'url' };

        const { filter, options, selected } = pokedexReducer({
            filter: null,
            options: [],
            selected: null
        }, setFilter('test'));
        
        expect(filter).not.toBeNull();
        expect(filter).toEqual('test');
        expect(selected).toBeNull();
        expect(options).not.toBeNull();
        expect(options.length).toEqual(0);
    });
});