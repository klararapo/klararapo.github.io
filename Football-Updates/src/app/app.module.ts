import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './shared/components/nav/nav.component';
import { StandingsComponent } from './shared/components/standings/standings.component';
import { TeamComponent } from './shared/components/team/team.component';
import { StandingRowComponent } from './shared/components/standings/standing-row/standing-row.component';

@NgModule({
    declarations: [AppComponent, NavComponent, StandingsComponent, TeamComponent, StandingRowComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatMenuModule,
        MatCardModule,
        MatTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
