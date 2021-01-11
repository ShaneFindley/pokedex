import React from 'react';
import { mount } from 'enzyme';
import { PokemonStats } from './Stats';
import { IPokemon } from '../../../types/Pokemon';

describe('Stats', () => {
    it('should display statistics about a pokemon.', () => {

        const pokemon: IPokemon = {
            stats: [
                { base_stat: 45, effort: 0, stat: { name: 'hp', url: 'url' } },
                { base_stat: 21, effort: 0, stat: { name: 'attack', url: 'url' } },
                { base_stat: 23, effort: 0, stat: { name: 'defense', url: 'url' } },
                { base_stat: 56, effort: 0, stat: { name: 'special-attack', url: 'url' } },
                { base_stat: 12, effort: 0, stat: { name: 'special-defense', url: 'url' } },
                { base_stat: 99, effort: 0, stat: { name: 'speed', url: 'url' } },
            ]
        } as IPokemon;

        const wrapper = mount(
            <PokemonStats pokemon={pokemon} />
        );

        expect(wrapper.find('.value').at(0).text()).toContain('45');
        expect(wrapper.find('.value').at(1).text()).toContain('21');
        expect(wrapper.find('.value').at(2).text()).toContain('23');
        expect(wrapper.find('.value').at(3).text()).toContain('56');
        expect(wrapper.find('.value').at(4).text()).toContain('12');
        expect(wrapper.find('.value').at(5).text()).toContain('99');
    });
})