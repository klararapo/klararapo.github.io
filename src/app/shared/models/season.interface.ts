import { Coverage } from './coverage.interface';

export interface Season {
    year: number;
    start: Date;
    end: Date;
    current: boolean;
    coverage: Coverage;
}
