import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subscription, catchError, map } from 'rxjs';
import { ResponseInterface } from 'src/app/shared/models/base.interface';
import { TeamResults } from 'src/app/shared/models/fixture.interface';
import { LeagueService } from 'src/app/shared/services/league.service';

@Component({
    selector: 'fu-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
    teamResults$: Observable<TeamResults[]> | undefined;
    paramsSubscription!: Subscription;
    constructor(private route: ActivatedRoute, private leagueService: LeagueService, private router: Router) {}

    ngOnInit(): void {
        this.route.params.subscribe((p) => {
            if (!p['id'] || !p['team_id']) {
                console.error('Missing parameters: league id or team id');
            } else {
                this.teamResults$ = this.leagueService.getTeamResults(p['id'], p['team_id']).pipe(
                    map((r: ResponseInterface<TeamResults>) => {
                        return r.response;
                    }),
                    catchError((err) => {
                        console.error(err);
                        return EMPTY;
                    })
                );
            }
        });
    }
    goBack(): void {
        const leagueId = this.route.snapshot.paramMap.get('id');
        this.router.navigate(['standings/' + leagueId]);
    }

    ngOnDestroy(): void {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    }
}
