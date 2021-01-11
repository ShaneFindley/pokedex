import { createContext } from "react"
import { useSelector } from "react-redux";

import { IPokedexSlice } from "../../reducers/Pokedex-Reducer";

export const PokedexContext = createContext<IPokedexSlice>({} as IPokedexSlice);

export const PokedexProvider: React.FC = ({children}) => {
    const state = useSelector((state: { pokedex: IPokedexSlice }) => state.pokedex);
    return <PokedexContext.Provider value={ state }>
        {children}
    </PokedexContext.Provider>
}