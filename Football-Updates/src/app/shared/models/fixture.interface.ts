import { League, Team } from './league.interface';

export interface Fixture {
    id: number;
    referee: string;
    timezone: string;
    date: Date;
    timestamp: number;
    periods: Period;
    venue: Venue;
    status: Status;
}

export interface Period {
    first: number;
    second: number;
}

export interface Venue {
    id: number;
    name: string;
    city: string;
}
export interface Status {
    long: string;
    short: string;
    elapsed: number;
}

export interface TeamResults {
    fixture: Fixture;
    league: FixtureLeague;
    teams: FixtureTeams;
    goals: Goals;
    score: Score;
}

export interface FixtureLeague {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
}

export interface TeamFixture {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
}

export interface FixtureTeams {
    home: TeamFixture;
    away: TeamFixture;
}

export interface Goals {
    home: number;
    away: number;
}

export interface Score {
    halftime: Goals;
    fulltime: Goals;
    extratime: Goals;
    penalty: Goals;
}
