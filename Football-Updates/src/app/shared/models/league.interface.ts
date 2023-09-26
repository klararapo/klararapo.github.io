import { Country } from './country.interface';
import { Season } from './season.interface';

export interface League {
    id: number;
    name: string;
    type: string;
    logo: string;
    standings: Array<Standing[]>;
}

export interface Standing {
    rank: number;
    team: Team;
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    all: Game;
    home: Game;
    away: Game;
    update: Date;
    status: string;
    description: string;
}

export interface Team {
    id: number;
    name: string;
    logo: string;
}

export interface Game {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: Goal;
}

export interface Goal {
    for: number;
    against: number;
}

export interface PartialLeague {
    league: League;
    season: Array<Season>;
    country: Country;
}
