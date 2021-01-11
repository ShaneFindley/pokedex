import { IEnrichedDetail } from "../types/Pokemon";
import { add, clear, myPokemonReducer, remove, setOnlyMyPokemon } from "./MyPokemon-Reducer";

describe('MyPokemon-Reducer', () => {
    it('should return a default state when handling a clear action.', () => {
        expect(myPokemonReducer({
            items: [],
            onlyMyPokemon: false
        }, clear)).toEqual({
            items: [],
            onlyMyPokemon: false
        });
    });

    it('should add the pokemon to my pokemon items when handling an add action.', () => {
        const pokemon: IEnrichedDetail = { id: 1, name: 'grumpy', url: 'url' };

        const { items, onlyMyPokemon } = myPokemonReducer({
            items: [],
            onlyMyPokemon: false
        }, add(pokemon));
        
        expect(items).not.toBeNull();
        expect(items.length).toEqual(1);
        expect(onlyMyPokemon).toEqual(false);
    });

    it('should remove the pokemon from my pokemon items when handling a remove action.', () => {
        const pokemon: IEnrichedDetail = { id: 1, name: 'grumpy', url: 'url' };

        const { items, onlyMyPokemon } = myPokemonReducer({
            items: [pokemon.id],
            onlyMyPokemon: false
        }, remove(pokemon));
        
        expect(items).not.toBeNull();
        expect(items.length).toEqual(0);
        expect(onlyMyPokemon).toEqual(false);
    });

    it('should set onlyMyPokemon flag when handling a setOnlyMyPokemon action.', () => {

        const { onlyMyPokemon } = myPokemonReducer({
            items: [],
            onlyMyPokemon: false
        }, setOnlyMyPokemon(true));
        
        expect(onlyMyPokemon).toEqual(true);
    });
});