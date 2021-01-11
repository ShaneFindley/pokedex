// Common types to be shared throughout the application.

export interface IPokemon {
    abilities: IAbility[];
    base_experience: number;
    forms: IDetail[];
    game_indices: IGameIndices[];
    height: number;
    held_items: IHeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: IMove[];
    name: string;
    order: number;
    species: IDetail;
    stats: IStat[];
    types: IType[];
    weight: number;
}

interface IAbility {
    ability: IDetail;
    is_hidden: boolean;
    slot: number;
}

interface IGameIndices {
    game_index: number;
    version: IDetail;
}

interface IHeldItem {
    item: IDetail;
    version_Details: IVersionDetails[];
}

interface IMove {
    move: IDetail;
    version_group_details: IVersionGroupDetails[];
}

interface IType {
    slot: number;
    type: IDetail;
}

interface IStat {
    base_stat: number;
    effort: number;
    stat: IDetail;
}

export interface IDetail {
    name: string;
    url: string;
}

export interface IEnrichedDetail extends IDetail {
    id: number;
}

interface IVersionDetails {
    rarity: number;
    version: IDetail;
}

interface IVersionGroupDetails {
    level_earned_at: number;
    move_learn_method: IDetail;
    version_group: IDetail;
}