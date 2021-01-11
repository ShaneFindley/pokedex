import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

import { select } from "../../reducers/Pokemon-Reducer";
import { PokemonContext } from "../context/Pokemon-Provider";
import { IEnrichedDetail, IPokemon } from "../../types/Pokemon";

export const usePokemonDetail = (pokemon: IEnrichedDetail | null): IPokemon | undefined => {

    const dispatch = useDispatch();
    const { cache } = useContext(PokemonContext);

    // If we have a cached version of the pokemon we don't need to try again.
    const cached = pokemon ? cache.find(o => o.id === pokemon.id) : null;
    const { data } = useSWR<IPokemon>(!cached && pokemon ? pokemon.url : null);

    useEffect(() => {
        if (data) {
            dispatch(select({ pokemon: data, cache: [...cache.slice(Math.max(cache.length - 10, 0)), data] }));
        }
    }, [cache, cache?.length, data, dispatch]);

    if (cached) {
        return cached;
    } else {
        return data;
    }
}