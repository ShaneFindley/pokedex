import { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr"

import { setPokemon } from "../../reducers/Pokedex-Reducer";
import { MyPokemonContext } from "../context/MyPokemon-Provider";
import { PokedexContext } from "../context/Pokedex-Provider";
import { IDetail, IEnrichedDetail } from "../../types/Pokemon";

interface IPokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: IDetail[];
}

interface IUsePokemon {
    results: IEnrichedDetail[];
    count: number;
}

export const usePokemon = (mocked: boolean): IUsePokemon => {
    const dispatch = useDispatch();
    const { filter, options } = useContext(PokedexContext);
    const { items: myPokemon, onlyMyPokemon } = useContext(MyPokemonContext);

    // To avoid bombarding pokeapi.co I pulled their data and created mocks for testing.
    const [url, setUrl] = useState<string>(mocked
        ? './mock/pokemon-limit100-offset0.json'
        : 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0'
    );

    const { data } = useSWR<IPokemonResponse, Error>(url, { revalidateOnFocus: false });

    useEffect(() => {
        if (data) {
            if (options.length === data.count) {
                // We already have the information we require as it has been persisted.
                return;
            }

            const enrichedResults = enrichResults(data.results);
            dispatch(setPokemon([...options, ...enrichedResults]));

            if (data.next) {
                setUrl(data?.next)
            }
        }
    }, [data, data?.next, dispatch, options]);

    const filteredResults = useMemo(() => {

        let filteredResults = [];
        for (let option of options) {
            let valid = true;
            if (onlyMyPokemon) {
                valid = myPokemon.indexOf(option.id) !== -1;
            }
            
            if (valid && filter) {
                valid = option.name.indexOf(filter as string) >= 0 || option.id === Number(filter)
            } 
            
            if (valid) {
                filteredResults.push(option);
            }
        }
        
        return filteredResults;
    }, [filter, options, onlyMyPokemon, myPokemon]);

    return {
        results: filteredResults,
        count: filteredResults.length
    };
}

// This function is ugly but I couldn't find a clean way to retrieve the IDs.
function enrichResults(results: IDetail[]): IEnrichedDetail[] {
    if (!results) {
        return [];
    }

    const enrichedResults: IEnrichedDetail[] = [];
    for (let result of results) {
        const { name, url } = result;
        const startPosition = url.indexOf('/pokemon/') + 9;
        const endPosition = url.length - url.indexOf('/pokemon/') - 10;
        const id = Number(url.substr(startPosition, endPosition));
        if (Number.isNaN(id)) {
            console.error(id);
        }

        enrichedResults.push({ name, url, id });
    }

    return enrichedResults;
}