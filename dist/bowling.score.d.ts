export declare class BowlingScore {
    private readonly frames;
    constructor(frames: number[]);
    calculateTotalScore(): number;
    isSpare(frameIndex: number): boolean;
    isStrike(frameIndex: number): boolean;
    calculateSpareBonus(frameIndex: number): number;
    calculateStrikeBonus(frameIndex: number): number;
}
