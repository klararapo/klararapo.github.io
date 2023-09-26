import { League } from './league.interface';

export interface ResponseInterface<Type> {
    get: string;
    parameters: string[];
    errors: string[];
    results: number;
    paging: Paging;
    response: Type[];
}

interface Paging {
    current: number;
    total: number;
}

export interface ResponseLeague {
    league: League;
}
