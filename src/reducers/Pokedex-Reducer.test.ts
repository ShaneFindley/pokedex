import { IEnrichedDetail } from "../types/Pokemon";
import { clear, pokedexReducer, select, setPokemon, setFilter, setPage, setPageSize } from "./Pokedex-Reducer";

describe('Pokedex-Reducer', () => {
    it('should return a default state when handling a clear action.', () => {
        expect(pokedexReducer({
            filter: null,
            options: [],
            selected: null,
            page: 1,
            pageSize: 20
        }, clear)).toEqual({
            filter: null,
            options: [],
            selected: null,
            page: 1,
            pageSize: 20
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
            selected: null,
            page: 1,
            pageSize: 20
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
            selected: null,
            page: 1,
            pageSize: 20
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
            selected: null,
            page: 1,
            pageSize: 20
        }, setFilter('test'));
        
        expect(filter).not.toBeNull();
        expect(filter).toEqual('test');
        expect(selected).toBeNull();
        expect(options).not.toBeNull();
        expect(options.length).toEqual(0);
    });

    it('should set the page value when handling a setPage action.', () => {
        const { page } = pokedexReducer({
            filter: null,
            options: [],
            selected: null,
            page: 1,
            pageSize: 20
        }, setPage(2));
        
        expect(page).toEqual(2);
    });

    it('should set the page size value when handling a setPageSize action.', () => {
        const { pageSize } = pokedexReducer({
            filter: null,
            options: [],
            selected: null,
            page: 1,
            pageSize: 20
        }, setPageSize(2));
        
        expect(pageSize).toEqual(2);
    });
});