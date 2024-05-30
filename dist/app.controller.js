"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const bowling_score_1 = require("./bowling.score");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    calculateScore(frames) {
        const score = new bowling_score_1.BowlingScore(frames);
        return score.calculateTotalScore();
    }
    calculateSpares(frames) {
        const score = new bowling_score_1.BowlingScore(frames);
        let totalSpareBonus = 0;
        for (let i = 0; i < frames.length - 1; i += 2) {
            if (score.isSpare(i)) {
                totalSpareBonus += score.calculateSpareBonus(i);
            }
        }
        return totalSpareBonus;
    }
    calculateStrikes(frames) {
        const score = new bowling_score_1.BowlingScore(frames);
        let totalStrikeBonus = 0;
        for (let i = 0; i < frames.length - 2; i++) {
            if (score.isStrike(i)) {
                totalStrikeBonus += score.calculateStrikeBonus(i);
            }
        }
        return totalStrikeBonus;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('bowling-score'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Number)
], AppController.prototype, "calculateScore", null);
__decorate([
    (0, common_1.Post)('bowling-score/spares'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Number)
], AppController.prototype, "calculateSpares", null);
__decorate([
    (0, common_1.Post)('bowling-score/strikes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Number)
], AppController.prototype, "calculateStrikes", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map