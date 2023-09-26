import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { League, Standing } from '../../models/league.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { LeagueService } from '../../services/league.service';
import { EMPTY, Observable, Subscription, catchError, map } from 'rxjs';
import { ResponseInterface, ResponseLeague } from '../../models/base.interface';

@Component({
    selector: 'fu-standings',
    templateUrl: './standings.component.html',
    styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private leagueService: LeagueService) {}
    protected standings$: Observable<Standing[]> | undefined;
    private routeSubscription!: Subscription;

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe((p) => {
            if (!p['id']) {
                console.error('Missing parameter league id.');
            } else {
                this.standings$ = this.leagueService.getStandings(p['id']).pipe(
                    map((r: ResponseInterface<ResponseLeague>) => {
                        return r.response[0].league.standings[0];
                    }),
                    catchError((err) => {
                        console.error(err);
                        return EMPTY;
                    })
                );
            }
        });
    }

    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
    }
}
