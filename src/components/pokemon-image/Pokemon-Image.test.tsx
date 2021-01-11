import React from 'react';
import { mount } from 'enzyme';
import { PokemonImg } from './Pokemon-Image';

describe('Pokemon-Image', () => {

    // Disclaimer: These should be using prop lookup ideally.
    it('should do take the id and use it to lookup an image.', () => {
        const wrapper = mount(
            <PokemonImg id={1} />
        );

        expect(wrapper.html()).toContain('url(./resources/1.png)');
    });

    it('should take a custom class name and add it to the default.', () => {
        const wrapper = mount(
            <PokemonImg id={1} className='test' />
        );
        
        expect(wrapper.html()).toContain('pokemon-img test');
    });
})