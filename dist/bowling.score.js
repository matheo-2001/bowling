"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingScore = void 0;
class BowlingScore {
    constructor(frames) {
        this.frames = frames;
    }
    calculateTotalScore() {
        let totalScore = 0;
        for (let i = 0; i < this.frames.length; i++) {
            if (this.frames[i] < 0 || this.frames[i] > 10) {
                throw new Error("Invalid frame score");
            }
            totalScore += this.frames[i];
            if (this.isSpare(i)) {
                totalScore += this.calculateSpareBonus(i);
            }
            else if (this.isStrike(i)) {
                totalScore += this.calculateStrikeBonus(i);
            }
        }
        return totalScore;
    }
    isSpare(frameIndex) {
        console.log(frameIndex);
        const maxRegularFrameIndex = 20;
        return (frameIndex % 2 === 0)
            && (frameIndex < maxRegularFrameIndex)
            && (frameIndex + 1 < this.frames.length)
            && (this.frames[frameIndex] + this.frames[frameIndex + 1] === 10);
    }
    isStrike(frameIndex) {
        return this.frames[frameIndex] === 10;
    }
    calculateSpareBonus(frameIndex) {
        if (frameIndex + 2 < this.frames.length) {
            return this.frames[frameIndex + 2];
        }
        return 0;
    }
    calculateStrikeBonus(frameIndex) {
        if (frameIndex + 2 < this.frames.length) {
            return this.frames[frameIndex + 1] + this.frames[frameIndex + 2];
        }
        return 0;
    }
}
exports.BowlingScore = BowlingScore;
//# sourceMappingURL=bowling.score.js.map