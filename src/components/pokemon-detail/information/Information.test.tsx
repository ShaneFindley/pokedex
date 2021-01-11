import React from 'react';
import { mount } from 'enzyme';
import { PokemonInformation } from './Information';
import { IPokemon } from '../../../types/Pokemon';

describe('Information', () => {
    it('should display information about a pokemon.', () => {

        const pokemon: IPokemon = {
            height: 10,
            weight: 50,
            abilities: [{ ability: { name: 'test-ability', url: 'url' }, is_hidden: false, slot: 1 }],
            types: [{ slot: 1, type: { name: 'test-class', url: 'url' } }]
        } as IPokemon;

        const wrapper = mount(
            <PokemonInformation pokemon={pokemon} />
        );

        expect(wrapper.find('.height > div').at(0).text()).toContain('10');
        expect(wrapper.find('.weight > div').at(0).text()).toContain('50');
        expect(wrapper.find('.pokemon-abilities > .item').at(0).text()).toContain('test-ability');
        expect(wrapper.find('.pokemon-class > .item').at(0).text()).toContain('test-class');
    });
})