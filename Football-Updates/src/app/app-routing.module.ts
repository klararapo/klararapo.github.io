import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './shared/components/standings/standings.component';
import { TeamComponent } from './shared/components/team/team.component';

const routes: Routes = [
    {
        path: 'standings/:id',
        component: StandingsComponent,
    },
    {
        path: 'standings/:id/team/:team_id',
        component: TeamComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
