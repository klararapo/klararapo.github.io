import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map, shareReplay } from 'rxjs';
import { PartialLeague } from '../models/league.interface';
import { environment } from 'src/environments/environment';
import { ResponseInterface, ResponseLeague } from '../models/base.interface';
import { TeamResults } from '../models/fixture.interface';

enum CountryLeague {
    'England' = 'Premier League',
    'Spain' = 'La Liga',
    'Germany' = 'Bundesliga',
    'France' = 'Ligue 1',
    'Italy' = 'Serie A',
}
@Injectable({
    providedIn: 'root',
})
export class LeagueService {
    constructor(private http: HttpClient) {}
    apiUrl = environment.apiUrl;
    apiKey = environment.apiKey;

    getCurrentYear(): number {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    headers = new HttpHeaders({
        'x-rapidapi-key': this.apiKey,
    });

    getStandings(leagueId: number): Observable<ResponseInterface<ResponseLeague>> {
        let year = this.getCurrentYear();
        return this.http
            .get<ResponseInterface<ResponseLeague>>(`${this.apiUrl}/standings?league=${leagueId}&season=${year}`, {
                headers: this.headers,
            })
            .pipe(
                map((r: ResponseInterface<ResponseLeague>) => r),
                shareReplay(1),
                catchError((err) => {
                    console.error(err);
                    return EMPTY;
                })
            );
    }

    getLeagueId(leagueName: string): Observable<ResponseInterface<PartialLeague>> {
        let selectedLeague = CountryLeague[leagueName as keyof typeof CountryLeague];
        let year = this.getCurrentYear();
        return this.http
            .get<ResponseInterface<PartialLeague>>(
                `${this.apiUrl}leagues?name=${selectedLeague}&country=${leagueName}&season=${year}`,
                {
                    headers: this.headers,
                }
            )
            .pipe(
                map((r: ResponseInterface<PartialLeague>) => r),
                shareReplay(1),
                catchError((err) => {
                    console.error(err);
                    return EMPTY;
                })
            );
    }

    getTeamResults(leagueId: number, teamId: number): Observable<ResponseInterface<TeamResults>> {
        let year = this.getCurrentYear();
        let last = 10;
        return this.http
            .get<ResponseInterface<TeamResults>>(
                `${this.apiUrl}fixtures?league=${leagueId}&team=${teamId}&season=${year}&last=${last}`,
                {
                    headers: this.headers,
                }
            )
            .pipe(
                map((r: ResponseInterface<TeamResults>) => r),
                shareReplay(1),
                catchError((err) => {
                    console.error(err);
                    return EMPTY;
                })
            );
    }
}
