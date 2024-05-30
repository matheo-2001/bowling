import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    calculateScore(frames: number[]): number;
    calculateSpares(frames: number[]): number;
    calculateStrikes(frames: number[]): number;
}