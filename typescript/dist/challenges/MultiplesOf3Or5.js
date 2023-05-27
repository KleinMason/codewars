"use strict";
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
class Challenge {
}
Challenge.solution = (ceiling) => {
    if (ceiling < 3)
        return 0;
    let sum = 0;
    for (let i = 3; i < ceiling; i++) {
        if (i % 3 === 0)
            sum += i;
        else if (i % 5 === 0)
            sum += i;
    }
    return sum;
};
exports.Challenge = Challenge;
