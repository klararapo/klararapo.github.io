import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../../services/league.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'fu-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    constructor(private router: Router, private leagueService: LeagueService) {}
    private leagueSubscription!: Subscription;
    countries: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];

    goToCountyRoute(country: string) {
        if (this.leagueSubscription) {
            this.leagueSubscription.unsubscribe();
        }
        this.leagueService.getLeagueId(country).subscribe(
            (r) => {
                let id = r.response[0].league.id;
                this.router.navigate(['/standings/', id]);
            },
            (error) => {
                console.error('Error fetching league Id: ', error);
            }
        );
    }

    ngOnDestroy(): void {
        if (this.leagueSubscription) {
            this.leagueSubscription.unsubscribe();
        }
    }
}
