export interface Location {
    lat: number;
    long: number;
}

export interface MetaData {
    location?: Location;
    date?: string;
}

export interface CodingResource {
    id: number;
    description: string;
    url: string;
    types: string[];
    topics: string[];
    levels: string[];
    metaData?: MetaData;
    isFavorite?: boolean;
}
