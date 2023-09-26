import { Component, Input } from '@angular/core';
import { Standing } from 'src/app/shared/models/league.interface';

@Component({
    selector: '[fu-standing-row]',
    templateUrl: './standing-row.component.html',
    styleUrls: ['./standing-row.component.scss'],
})
export class StandingRowComponent {
    @Input()
    standInput!: Standing;
}
