import { useContext } from "react";
import { Icon, Pagination, Select } from 'react-materialize';
import { useDispatch } from "react-redux";

import { PokedexContext } from "../context/Pokedex-Provider";
import { usePagination } from "./usePagination";
import { setPage, setPageSize } from "../../reducers/Pokedex-Reducer";

import './Pokemon-Pagination.css';

export const PokemonPagination: React.FC<{ count: number }> = ({ count, children }) => {
    const dispatch = useDispatch();

    const { page, pageSize, selected } = useContext(PokedexContext);
    const pagination = usePagination(count, pageSize, page);

    if (selected) {
        return null;
    }

    return <div className='grid-pagination'>
        <Pagination
            activePage={page}
            items={pagination.pages}
            leftBtn={<Icon>chevron_left</Icon>}
            maxButtons={10}
            rightBtn={<Icon>chevron_right</Icon>}
            onSelect={(page: number) => dispatch(setPage(page))}
        />
        { children }
        <div className='pagination-selector'>
            <label>Page Size: </label>
            <Select
                multiple={false}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => dispatch(setPageSize(Number(e.target.selectedOptions[0].value)))}
                options={{
                    classes: '',
                    dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }
                }}
                defaultValue={pageSize}
            >
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </Select>
        </div>
    </div>;
}